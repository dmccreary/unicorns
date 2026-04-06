from PIL import Image
import os

def crop_to_16_9(image_path, output_path):
    img = Image.open(image_path)
    w, h = img.size
    target_ratio = 16/9
    
    # Calculate cropping (top-biased to preserve titles/focal points)
    # The generated images seem to have letterboxing from the 'Vertical Padding' prompt.
    # We want to crop to the 16:9 area within the 1:1 frame.
    new_h = w / target_ratio
    # If the image is square, new_h < h.
    # We crop the top and bottom.
    # Since we requested 15% padding, we'll center it mostly but bias slightly up (10% of the diff from top).
    top = (h - new_h) * 0.5 
    img_cropped = img.crop((0, top, w, top + new_h))
    
    img_cropped.save(output_path)
    print(f"Saved landscape: {output_path} ({img_cropped.size})")

if __name__ == "__main__":
    for i in range(1, 9):
        sq_path = f"panel-0{i}-sq.png"
        out_path = f"panel-0{i}.png"
        if os.path.exists(sq_path):
            crop_to_16_9(sq_path, out_path)
        else:
            print(f"File not found: {sq_path}")

import sys
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

input_path = sys.argv[1]
output_path = sys.argv[2]

try:
    image = Image.open(input_path)
    # Convert to RGB (required for JPG)
    if image.mode != "RGB":
        image = image.convert("RGB")
    image.save(output_path, "JPEG", quality=90)
    print(f"Successfully converted to {output_path}")
except Exception as e:
    print(f"Error converting image: {e}")
    sys.exit(1)

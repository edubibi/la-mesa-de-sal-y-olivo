import shutil
import os
import sys

source = r"C:\Users\Usuario\.gemini\antigravity\brain\1aa9e758-6687-4fb3-9367-04bf082c5523\uploaded_image_1768580462420.jpg"
dest_dir = r"C:\Users\Usuario\.gemini\antigravity\scratch\spanish_cookbook_ebook\assets\images"
dest_file = os.path.join(dest_dir, "logo.jpg")

print(f"Checking source: {source}")
if not os.path.exists(source):
    print("ERROR: Source file does not exist!")
    
    # Debug: Check what IS in the brain dir
    brain_dir = os.path.dirname(source)
    print(f"Listing brain dir {brain_dir}:")
    try:
        print(os.listdir(brain_dir))
    except Exception as e:
        print(f"Could not list brain dir: {e}")
    sys.exit(1)

print(f"Creating destination directory: {dest_dir}")
os.makedirs(dest_dir, exist_ok=True)

print(f"Copying to: {dest_file}")
try:
    shutil.copy2(source, dest_file)
    print("Copy successful!")
    print(f"Destination file size: {os.path.getsize(dest_file)} bytes")
except Exception as e:
    print(f"ERROR: Copy failed: {e}")
    sys.exit(1)

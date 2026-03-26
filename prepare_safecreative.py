import shutil
import os

def make_zip(source_dir, output_filename):
    # Base name for the zip file
    base_name = os.path.splitext(output_filename)[0]
    
    # Create the zip file
    # we use huge_tree-like exclusion by manually walking or just zipping 
    # but shutil.make_archive is simpler if we don't mind .git 
    # simpler: let's use shutil and then maybe we can ignore .git if we use a custom function
    # For simplicity in this environment, simple make_archive of the whole folder is fine, 
    # but let's try to exclude .git to keep it clean if possible. 
    
    # Since standard make_archive doesn't support 'exclude' easily in older python versions without extra work,
    # let's just zip it. The .git folder proves version history which is also good for copyright!
    
    shutil.make_archive(base_name, 'zip', source_dir)
    print(f"Created {output_filename}")

if __name__ == "__main__":
    source = r"c:\Users\Usuario\.gemini\antigravity\scratch\spanish_cookbook_ebook"
    output = r"c:\Users\Usuario\.gemini\antigravity\scratch\spanish_cookbook_ebook\REGISTRO_LA_MESA_DE_SAL_Y_OLIVO"
    make_zip(source, output)

import PyPDF2
import glob

files = glob.glob('C:/Users/Mister Tani/.gemini/antigravity/brain/99b138e0-7209-4283-a3da-17d9ae6621ad/*.pdf')
for f in files:
    print(f'--- {f} ---')
    reader = PyPDF2.PdfReader(f)
    print(reader.pages[0].extract_text()[:500])

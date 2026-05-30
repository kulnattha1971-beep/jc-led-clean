import shutil, os

src_dir = r"C:\Users\user\.gemini\antigravity\brain\39d819e2-a697-460b-b9b2-828b849d32ea"
dst_dir = r"c:\Users\user\Downloads\jc-led-nextjs-v2_1\jc-led-clean\public\portfolio"

files = [
    ("portfolio_wedding_01_1778967746190.png", "wedding-01.jpg"),
    ("portfolio_seminar_01_1778967808180.png", "seminar-01.jpg"),
    ("portfolio_booth_01_1778967821813.png",   "booth-01.jpg"),
    ("portfolio_meeting_01_1778967835461.png", "meeting-01.jpg"),
    ("portfolio_wedding_02_1778967856700.png", "wedding-02.jpg"),
    ("portfolio_booth_02_1778967931617.png",   "booth-02.jpg"),
    ("portfolio_seminar_02_1778967957259.png", "seminar-02.jpg"),
    ("portfolio_wedding_03_1778967971212.png", "wedding-03.jpg"),
    ("portfolio_meeting_02_1778968205110.png", "meeting-02.jpg"),
]

os.makedirs(dst_dir, exist_ok=True)

for src_name, dst_name in files:
    src = os.path.join(src_dir, src_name)
    dst = os.path.join(dst_dir, dst_name)
    print(f"Copying {src_name} -> {dst_name} ...", end=" ")
    shutil.copy2(src, dst)
    print("OK")

print("All done!")

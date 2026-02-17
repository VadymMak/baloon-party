#!/bin/bash
# ============================================================
# Baloon Party — Delete old .jpg/.png files after WebP conversion
# Run from project root: bash cleanup-images.sh
# ============================================================

echo "🗑️  Deleting old image files..."
echo ""

# --- UNUSED FILES (never referenced after redesign) ---
echo "--- Removing unused files ---"

# Old large icons (not used anywhere)
rm -f src/assets/icons/converted-instagram.png && echo "  ✅ icons/converted-instagram.png (705K)"
rm -f src/assets/icons/converted-phone.png && echo "  ✅ icons/converted-phone.png (685K)"
rm -f src/assets/icons/frame.png && echo "  ✅ icons/frame.png (649K)"
rm -f src/assets/icons/envelop.jpg && echo "  ✅ icons/envelop.jpg"
rm -f src/assets/icons/phones.jpg && echo "  ✅ icons/phones.jpg"
rm -f src/assets/icons/viber.jpg && echo "  ✅ icons/viber.jpg"
rm -f src/assets/icons/qr-code.jpg && echo "  ✅ icons/qr-code.jpg"

# Unused asset files
rm -f src/assets/about-bkg.jpg && echo "  ✅ about-bkg.jpg (duplicate)"
rm -f src/assets/contact-background.jpg && echo "  ✅ contact-background.jpg (old version)"
rm -f src/assets/gallery-button.jpg && echo "  ✅ gallery-button.jpg"
rm -f src/assets/header-menu-background.jpg && echo "  ✅ header-menu-background.jpg"
rm -f src/assets/logo-deselected.png && echo "  ✅ logo-deselected.png"
rm -f src/assets/baloon-party-logo.jpg && echo "  ✅ baloon-party-logo.jpg"
rm -f src/assets/baloon-party.png && echo "  ✅ baloon-party.png"
rm -f src/assets/one-ballon-background.jpg && echo "  ✅ one-ballon-background.jpg (small version)"

# Unused public images
rm -f public/images/contact-us.jpg && echo "  ✅ public/images/contact-us.jpg"
rm -f public/images/about-us.jpg && echo "  ✅ public/images/about-us.jpg (old version)"
rm -f public/images/gallery/just-sample.jpg && echo "  ✅ gallery/just-sample.jpg"

echo ""
echo "--- Removing old .jpg/.png replaced by .webp ---"

# src/assets/ originals (now .webp)
rm -f src/assets/about-background.jpg && echo "  ✅ about-background.jpg → .webp"
rm -f src/assets/contact-background-upd.jpg && echo "  ✅ contact-background-upd.jpg → .webp"
rm -f src/assets/one-ballon-background-removebg-preview.png && echo "  ✅ one-ballon-background-removebg-preview.png → .webp"

# src/assets/icons/ originals (now .webp)
rm -f src/assets/icons/instagram.jpg && echo "  ✅ icons/instagram.jpg → .webp"
rm -f src/assets/icons/telegram.jpg && echo "  ✅ icons/telegram.jpg → .webp"
rm -f src/assets/icons/whatsapp.jpg && echo "  ✅ icons/whatsapp.jpg → .webp"
rm -f src/assets/icons/facebook.jpg && echo "  ✅ icons/facebook.jpg → .webp"
rm -f src/assets/icons/tiktok.jpg && echo "  ✅ icons/tiktok.jpg → .webp"
rm -f src/assets/icons/phone.jpg && echo "  ✅ icons/phone.jpg → .webp"
rm -f src/assets/icons/frame-removebg-preview.png && echo "  ✅ icons/frame-removebg-preview.png → .webp"

# public/images/ originals (now .webp)
rm -f public/images/my-photo-wall.jpg && echo "  ✅ my-photo-wall.jpg → .webp"
rm -f public/images/about-us-upd.jpg && echo "  ✅ about-us-upd.jpg → .webp"
rm -f public/images/article_1.jpg && echo "  ✅ article_1.jpg → .webp"
rm -f public/images/article_2.jpg && echo "  ✅ article_2.jpg → .webp"
rm -f public/images/article_3.jpg && echo "  ✅ article_3.jpg → .webp"
rm -f public/images/testempnials_nikolay.jpg && echo "  ✅ testempnials_nikolay.jpg → .webp"
rm -f public/images/testemonials_nadja.jpg && echo "  ✅ testemonials_nadja.jpg → .webp"
rm -f public/images/testemonials_market.jpg && echo "  ✅ testemonials_market.jpg → .webp"
rm -f public/images/twitter-large-image.png && echo "  ✅ twitter-large-image.png (1.2M saved)"

# Gallery originals (now .webp)
for i in $(seq 1 12); do
  rm -f "public/images/gallery/gallery_${i}.jpg" && echo "  ✅ gallery/gallery_${i}.jpg → .webp"
done

for i in $(seq 1 6); do
  rm -f "public/images/gallery/slide_${i}.jpg" && echo "  ✅ gallery/slide_${i}.jpg → .webp"
done

echo ""
echo "============================================"
echo "🎉 Cleanup complete!"
echo "============================================"
echo ""
echo "Verify no broken references:"
echo "  npm start"
echo ""
echo "Then commit:"
echo "  git add -A"
echo "  git commit -m 'perf: remove old jpg/png, WebP only'"
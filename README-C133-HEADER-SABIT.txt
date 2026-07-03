C133 HEADER SABİT REVİZE

Sorun:
Mobilde üstteki hızlı sekme menüsü sabit kalırken Product Request Form başlığı sticky davrandığı için scroll sırasında menünün altına giriyor ve az da olsa kayıyor/kırpılıyordu.

Düzeltme:
- Mobilde app-header artık sticky değil, normal akışta duruyor.
- Hızlı sekme menüsü üstte sabit kalmaya devam ediyor.
- Product Request Form + dil seçenekleri scroll sırasında menünün altına girip kaymayacak.
- Cache sürümü c133-mobile-header-stable olarak güncellendi.

GitHub'a yükleme:
1. ZIP'i çıkar.
2. İçindeki product-request-form-main klasöründeki tüm dosyaları product-request-form reposuna yükle.
3. Aynı isimli dosyaların üzerine yaz.
4. Commit changes yap.
5. Pages deploy sonrası telefonda uygulamayı yenile / gerekirse PWA cache temizle.

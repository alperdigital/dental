# Diş Hekimliği ve Ortopedi Web Sitesi

Caddebostan’da hasta kabul eden iki hekimin uzmanlık alanlarını, ilk ziyaret bilgilerini ve randevu kanallarını bir araya getiren statik web sitesi.

[Canlı site](https://alperdigital.github.io/dental/)

## Projeyi nasıl geliştirdim

Sitenin görsel dilini, sayfa düzenini ve gezinme akışını ben tasarladım. Fotoğraf efektlerinin fikri, katmanların görünümü ve fare, klavye ve dokunmatik ekrandaki geçiş davranışları benim tasarım katkım. Bu kararları HTML, CSS ve JavaScript’e aktarırken, farklı ekran genişliklerine uyarlarken ve uygulamayı test ederken Codex’ten destek aldım.

- **Tedavi kartları.** Diş görselleri için aynalı şeritler ve lekeli yüzey katmanı tasarladım. Etkileşim sırasında yansıma ve leke katmanı geri çekilir, alttaki temiz görsel açığa çıkar. Bu geçiş, temsili diş görselleri üzerinden lekeli ve temiz görünüm arasındaki farkı anlatır.
- **Hekim portreleri.** İkinci filtre yayında. Kenar yansımaları portreye derinlik katıyor. Koyu katmanın ortasında diş hekimi için diş, ortopedi uzmanı için muayene panosu amblemi bulunuyor. Etkileşimde katman yukarıdan aşağı açılıyor ve fotoğrafın altında ince bir bant kalıyor. Amblem küçülerek sol alta yerleşiyor, yanında hekimin unvanı ve adı beliriyor.
- **Mobil gezinme ve masaüstü yerleşimi.** Mobilde dört bölüm bağlantısı ve ortadaki randevu düğmesi sabit alt menüde yer alıyor. İletişim ve randevu bağlantıları ana sayfadaki ilgili konuma götürüyor. Masaüstünde Kadromuz portreleri eşit çerçeveler kullanıyor. Ayrıntılı profil sayfalarında biyografi ve portre yan yana duruyor.

## Yerelde çalıştırma

Depo dizininde Python 3 ile statik sunucuyu başlatın. Paket kurulumu, derleme ve API anahtarı gerekmiyor. [Yerel site](http://localhost:8000/)

```sh
python3 -m http.server 8000
```

## Kodu incelemek

| Dosya | Sorumluluk |
| --- | --- |
| [index.html](index.html) | Giriş, tedavi kartları, Kadromuz, SSS ve iletişim bölümü. |
| [site.css](site.css) | Ortak tipografi, yerleşim, tedavi kartlarının yansıma ve leke katmanları, portre yansımaları. |
| [mirror-slat.js](mirror-slat.js) | Tedavi kartlarına yansıma şeritleri ekler. `IntersectionObserver` ile kartlar ve portreler görünür alana girdiğinde açılma durumunu günceller. |
| [portrait-overlay.css](portrait-overlay.css) | Portre katmanının açılması, amblemin hareketi ve isim bandı. |
| [hekim-profili.html](hekim-profili.html), [uzman-profili.html](uzman-profili.html), [profiles.css](profiles.css) | Hekim biyografileri ve profil sayfalarının ortak yerleşimi. |
| [mobile-nav.css](mobile-nav.css) | Mobil alt menü, randevu düğmesi ve ekranın alt güvenli alanı için boşluk. |
| [mobile-wrap.css](mobile-wrap.css), [mobile-wrap.js](mobile-wrap.js) | Mobil ana başlığın iki satırlı düzeni ve işaretli etiketlerde son iki satırın dengelenmesi. |
| [map-toggle.js](map-toggle.js) | Harita panelini açıp kapatır ve Google Haritalar gömüsünü ilk açılışta yükler. |
| [image-save-deterrent.js](image-save-deterrent.js), [assets/](assets/) | Görsel kaydetme ve sürükleme hareketlerine yönelik caydırıcı önlemler ve WebP dosyaları. |

Masaüstünde görsel katmanları fareyle üzerine gelince veya klavyeyle bağlantıya odaklanınca açılır. Dokunmatik ve dar ekranlarda açılma durumu kartın görünürlüğüne bağlıdır. CSS, hareketi azaltma tercihine göre geçişleri devre dışı bırakır. Portrelerde önceki yansıma görünümüne dönmek için `index.html` dosyasındaki `portrait-overlay.css` bağlantısı kaldırılabilir.

Mobil ana başlıkta “ve Ortopedi” birlikte ikinci satıra alınır. `data-mobile-wrap` işaretli diğer etiketlerde sondan bir önceki satır %65’ten fazla doluysa, sığan ve son iki satırın doluluk farkını azaltan kelimeler alt satıra taşınır. Uygun bölme bulunamadığında tarayıcının satır kırma davranışı kullanılır.

## Doğrulama ve yayın

- Dar ekranda ana başlığı, alt menüyü ve randevu bağlantısını kontrol edin. Masaüstünde Kadromuz kartlarını ve iki profil sayfasının yerleşimini karşılaştırın.
- Kartları fare, klavye ve dokunmatik görünümde deneyin. İşletim sisteminde hareketi azaltma tercihi açıkken geçişleri yeniden kontrol edin.
- İletişim bağlantısının ana sayfadaki bölüme gittiğini, randevu profilinin açıldığını ve haritanın düğmeye basılana kadar yüklenmediğini doğrulayın.
- GitHub Pages’te yayın kaynağı `main` dalının kök dizinidir. [`.nojekyll`](.nojekyll) statik dosyaların doğrudan yayımlanmasını sağlar. Sayfa ve varlık yollarını `/dental/` altında çalışacak şekilde göreli tutun.
- Adres, hasta kabul saatleri, hekim unvanları ve randevu kanallarını klinikle doğrulayın. Sağlık metinleri değiştiğinde ilgili hekimin incelemesinden sonra güncelleme tarihini kaydedin.

## Görsel hakları ve lisans

Bu depo için açık kaynak lisansı yayımlanmamıştır. Kod, klinik içeriği ve görselleri yeniden kullanmadan önce ilgili hak sahiplerinden izin alın. Bir görselin sitede kullanım izni, kaynak depoda yeniden dağıtım iznini kendiliğinden kapsamaz. Hasta verileri, izin belgeleri ve klinik içi belgeler bu depoya eklenmez.

Portre dosyaları branşa göre adlandırılır. Görsel kaydetme hareketlerine uygulanan kısıtlamalar caydırıcıdır. Yayımlanmış görsellere doğrudan dosya adresiyle erişilebilir.

# Diş Hekimliği ve Ortopedi Web Sitesi

Caddebostan’da hasta kabul eden iki hekimin uzmanlık alanlarını, ilk ziyaret bilgilerini ve randevu kanallarını bir araya getiren statik web sitesi.

[Canlı site](https://alperdigital.github.io/dental/)

## Tasarım ve geliştirme

Sitenin görsel tasarımını, sayfa düzenini ve fotoğraf efektlerini ben tasarladım. Tasarımı web'e aktarırken ve kodu geliştirirken Codex'ten destek aldım.

- **Tedavi kartları.** Diş görselleri için bir ayna yansıması ve lekeli yüzey efekti tasarladım. Masaüstünde kartın üzerine gelindiğinde veya klavyeyle odaklanıldığında, mobilde kart görünür alana girdiğinde katman çekiliyor ve alttaki temiz görsel ortaya çıkıyor. Bu geçiş, lekeli ve temiz görünüm arasındaki farkı görsel olarak anlatan temsili bir etkileşimdir.
- **Hekim portreleri.** Kenarlardaki yansıma portreye derinlik katıyor. Üstteki koyu katman, diş hekimliği için diş ve ortopedi için muayene amblemi taşıyor. Kartla etkileşimde katman yukarıdan aşağı açılıp altta kalıyor. Amblem küçülerek sol alta iniyor ve hekimin unvanı ile adı beliriyor. Önceki portre efektine dönmek için `index.html` dosyasındaki `portrait-overlay.css` bağlantısını kaldırmak yeterli.

## Teknik yapı

- **HTML ve CSS** ile çok sayfalı yerleşim, klavyeyle kullanılabilen yerel açılır bölümler ve mobil ekranlara uyarlanan tasarım.
- **JavaScript** ile portre ve kart efektleri (`mirror-slat.js`) ve isteğe bağlı harita yükleme (`map-toggle.js`).
- **WebP** görselleri `assets/` altında. Tedavi kartları ekran genişliğine göre farklı çözünürlükte görseller kullanır.
- Randevu işlemleri DoktorTakvimi’ne yönlendirilir. Google Haritalar gömüsü ziyaretçinin isteğiyle yüklenir.

### Mobil satır kırma

Ana başlık mobilde “Diş Hekimliği” ve “ve Ortopedi” olarak iki satırda gösterilir. Ana sayfadaki diğer işaretli etiketlerde, sondan bir önceki satır kullanılabilir genişliğin %65’ini aştığında son kelimeler alt satıra taşınabilir. Taşıma, kelime alt satıra sığıyorsa ve iki satırın doluluk farkı azalıyorsa yapılır. Uygun taşıma bulunamazsa tarayıcının satır kırma davranışı devreye girer.

Özelliği geri almak için `index.html` dosyasından `mobile-wrap.js` ve `mobile-wrap.css` etiketlerini kaldırın. Tek bir başlık veya etiket için `data-mobile-wrap` niteliğini kaldırmak yeterlidir.

### Görseller

Portre dosyaları branşa göre adlandırılır. Site içinde görselin sağ tıkla kaydedilmesi ve sürüklenmesi kısıtlanır. Bu önlem caydırıcıdır. Herkese açık görsel URL'leri, depo geçmişi ve ekran görüntüleri erişilebilir kalabilir.

## Yerelde çalıştırma

Proje dizininde aşağıdaki komutu çalıştırın ve [yerel siteyi](http://localhost:8000/) açın. Derleme, API anahtarı veya paket kurulumu gerekmez.

```sh
python3 -m http.server 8000
```

## Yayın ve bakım

GitHub Pages ayarlarında **Deploy from a branch** seçiliyken kaynak `main` dalının kök dizinidir. `.nojekyll` dosyası statik dosyaların doğrudan yayımlanmasını sağlar. Bağlantı ve dosya yollarında `/dental/` alt dizini için göreli yolları koruyun.

- Yayından önce mobil ve masaüstü yerleşimi, klavyeyle gezinmeyi, randevu bağlantılarını ve haritanın tıklamadan yüklenmediğini kontrol edin.
- Adres, hasta kabul saatleri, hekim unvanları ve randevu kanallarını klinikle teyit edin. Sağlık metinlerini ilgili hekime inceletin ve içerik onaylandığında güncelleme tarihini kaydedin.
- Portre, klinik fotoğrafı ve temsili görseller için kaynak ve kullanım izni kaydını tutun. Hasta verilerini, izin belgelerini ve klinik içi dokümanları bu depoya yüklemeyin.

İletişim ve profil kaynakları [hekimin sitesi](https://www.drfatmamervebas.com/) ve [randevu profili](https://www.doktortakvimi.com/profil/fatma-merve-bas).

## Lisans ve görsel hakları

Depo için bir açık kaynak lisansı yayımlanmamıştır. Kod, klinik içeriği ve görseller için yeniden kullanım yetkisini ilgili hak sahipleriyle doğrulayın. Bir görselin web sitesinde kullanılabilmesi, aynı görselin herkese açık bir kaynak deposunda yeniden dağıtılabileceği anlamına gelmez.

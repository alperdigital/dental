# Teknik ve içerik denetimi

Denetim tarihi 20 Kasım 2026. Kapsam, bu deponun statik sayfaları ve bağlantı verdiği servislerin siteyle temas ettiği noktalardır.

## Sayfalar ve bağlantılar

| Sayfa | İç bağlantılar ve rol |
| --- | --- |
| [index.html](../index.html) | Tedaviler, hekim hizmetleri, Kadromuz, ilk ziyaret, SSS ve iletişim. Üç tedavi detayına, iki hekim profiline ve gizlilik sayfasına bağlanır. Randevu ve iletişim menüleri ana sayfa bağlantılarını kullanır. |
| [muayene.html](../muayene.html), [dis-eti.html](../dis-eti.html), [restorasyon.html](../restorasyon.html) | Tedavi ayrıntıları. Tedavi listesine, randevu bölümüne ve gizlilik sayfasına dönüş bağlantıları. |
| [hekim-profili.html](../hekim-profili.html), [uzman-profili.html](../uzman-profili.html) | Hekim biyografileri. Kadromuz, iletişim veya ortopedi hizmetlerine dönüş. Hekim siteleri ve ortopedi randevu profili harici. |
| [kvkk.html](../kvkk.html) | Teknik gizlilik bilgisi. İletişime dönüş ve GitHub gizlilik bildirimi bağlantısı. |
| [iletisim.html](../iletisim.html), [ortopedi-hizmetleri.html](../ortopedi-hizmetleri.html) | Eski URL’lerden ana sayfanın ilgili bölümüne yönlendirme. |

İletişimde telefon bağlantısı, DoktorTakvimi randevu profili, Google Haritalar yol tarifi ve istek üzerine yüklenen bir harita iframe’i var. HTML, CSS ve JavaScript dosyaları yerel. Kaynakta GA4, GTM, Meta Pixel, Hotjar, benzeri izleme kodu, harici font veya otomatik yüklenen harici script, form gönderimi, fetch/XHR, çerez veya yerel depolama API’si kullanımı bulunmadı. GitHub Pages `main` kökünden HTTPS üzerinden yayın yapıyor.

## Teknik doğrulama

- Temiz Chromium bağlamlarında 320, 390 ve 1440 pikselde dokuz sayfa yolu açıldı. İlk yüklemede dış ağ isteği, çerez, yerel veya oturum depolaması, IndexedDB kaydı, yatay taşma, görsel yükleme hatası veya JavaScript çalışma hatası gözlenmedi. Google Haritalar isteği düğmeye basıldıktan sonra başladı. Canlı tarayıcı testinde, çalışma ortamının ağ aracısının sertifikası nedeniyle Chromium sertifika hatasını yok sayacak şekilde çalıştırıldı.
- 151 iç dosya ve bölüm başvurusu, başlık sırası, görsel alternatif metin nitelikleri ve ölçüleri kontrol edildi. Yedi benzersiz HTTPS dış adres test anında HTTP 200 döndürdü. Bu durum dış sitelerin içeriğini veya hizmetlerin doğruluğunu teyit etmez.
- Diş hekimliğinde 11 grupta 79, ortopedide 8 grupta 104 madde bulunuyor. Görünen sayaçlar listedeki maddelerle eşleşiyor. Benzer işlemler, eşdeğerliği hekim tarafından doğrulanana kadar ayrı kalıyor.
- Değişikliklerden önce canlı ana sayfada yapılan Lighthouse 13.6 mobil laboratuvar ölçümünde performans 99/100, otomatik erişilebilirlik 100/100, LCP 1,4 sn ve CLS 0 ölçüldü. Saha verisi ve INP doğrulanmadı. Otomatik puan, kapsamlı erişilebilirlik denetiminin yerine geçmez.

## İçerik ve mevzuat incelemesi

Aşağıdaki maddeler inceleme gerektiren bulgulardır. Tıbbi ifadeler ve hizmet kapsamı, hekim teyidi olmadan değiştirilmemiştir. Örnekler konumlarıyla verilmiştir. [12 Kasım 2025, 33075 sayılı Yönetmelik](https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html)

| Konum | İnceleme konusu |
| --- | --- |
| [index.html:19](../index.html#L19) | Botulinum toksini, genel anestezi, ortodonti ve lazer cerrahisi dahil hizmet kapsamı ve uygulama yeri. Empress, E-Max ve Deflex gibi ürün adlarının kullanımı için Madde 5/1-h yönünden değerlendirme. Köprü, implant ve kanal tedavisinde benzer başlıklar var. Hekim aynı işlemler olduğunu doğrulayana kadar kalemler korunmuştur. |
| [index.html:20](../index.html#L20) | “Laparoskopik Artrodezi”, “Total Uyluk Protezi” ve benzer enjeksiyon başlıklarının terminolojisi. Cerrahi, omurga ve diğer işlemlerin sunulduğu kurum ile ruhsat kapsamı. |
| [index.html:41–54](../index.html#L41-L54), [muayene.html:14](../muayene.html#L14), [dis-eti.html:14](../dis-eti.html#L14), [restorasyon.html:14](../restorasyon.html#L14) | Özellikle ağrı ve şişlikte başvuru, gebelik, çocukların ilk muayenesi ve tedavi açıklamalarında yetkili hekim incelemesi. Tedavi sayfalarında yayımdan önce inceleme öngören taslak ifadesi duruyor. |
| [hekim-profili.html:17–26](../hekim-profili.html#L17-L26), [uzman-profili.html:17–32](../uzman-profili.html#L17-L32), [index.html:59](../index.html#L59) | Tescilli unvan ve eğitim statüsü, güncel kurum, hasta kabul adresi ve randevu kanalları. Harici randevu ve profil bağlantılarının Madde 5/1-f, g ve h kapsamındaki değerlendirmesi. |
| [index.html:16–17](../index.html#L16-L17), [index.html:29–40](../index.html#L29-L40), [index.html:59](../index.html#L59) | Portre ve klinik görsellerinin kaynağı ve izinleri. Temsili diş kartındaki lekeli/temiz görünüm ve portre katmanlarının Madde 7/1-e, f ve g ile ilişkisi. Görsel örnekleminde ameliyat veya müdahale sırasında görüntülenen bir hasta belirlenmedi. Madde 7/1-k kapsamındaki uyarının uygulanabilirliği ve yerleşimi yetkili değerlendirmeye bırakıldı. |
| [index.html:59](../index.html#L59) ve diğer içerik sayfalarının footer’ı | Madde 5/1-ı kapsamındaki editör iletişim kanalı eksik. Sabit içerik tarihi görünür durumda. Doğrulanmış kanal sağlanınca kaynakta bırakılan TODO tamamlanmalı. |

Taranan site içeriğinde açık üstünlük iddiası, sonuç garantisi, hasta teşekkür metni, fiyat, kampanya veya indirim bulunmadı. Bu tarama, dış platform içeriklerinin veya sitenin mevzuata uygunluğunun onayı anlamına gelmez.

[Hekim onay listesi](HEKIM_ONAYI.md) · [KVKK hazırlık notu](KVKK_TASLAK.md)

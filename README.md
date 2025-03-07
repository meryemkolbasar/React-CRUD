![image](https://github.com/meryemkolbasar/React-CRUD/blob/50c653f0cc3181383b6e1da26015347651496370/Screenshot.png)

# Redux CRUD Uygulaması

Bu proje, Redux kullanarak bir API'den kullanıcı verilerini çekmek ve CRUD işlemleri gerçekleştirmek amacıyla geliştirilmiştir. React, Redux Toolkit, Bootstrap ve CSS kullanılarak oluşturulmuştur. 

Bu proje, **Alternativkraft** şirketinin staj başvurusu için istenilen proje kapsamında geliştirilmiştir.

## 🚀 Proje Özellikleri
- API'den kullanıcı verileri çekilir ve Redux store'da saklanır.
- Kullanıcı listesi ana sayfada kartlar halinde görüntülenir.
- Kullanıcı detayları ayrı bir sayfada gösterilir.
- Kullanıcı ekleme, düzenleme ve silme işlemleri desteklenir.
- Düzenleme işlemi için modal form kullanılmıştır.
- Yükleme ve hata durumları için kullanıcı bilgilendirmesi eklenmiştir.
- Mobil uyumlu ve kullanıcı dostu bir arayüz sunulmuştur.
- **Site dili Türkçedir.**

## 📌 Kullanılan Teknolojiler
- **React.js** - Kullanıcı arayüzünü oluşturmak için
- **Redux Toolkit** - Durum yönetimi için
- **Bootstrap** - UI geliştirme için
- **CSS** - Stiller için
- **JSONPlaceholder API** - Kullanıcı verilerini almak için

## 📂 Proje Kurulumu

Aşağıdaki adımları takip ederek projeyi kendi bilgisayarınızda çalıştırabilirsiniz:

### 1️⃣ Projeyi Klonlayın
```bash
git clone https://github.com/kullanici-adiniz/redux-crud.git
cd redux-crud
```

### 2️⃣ Gerekli Bağımlılıkları Yükleyin
```bash
npm install
```

### 3️⃣ Uygulamayı Çalıştırın
```bash
npm start
```

## 🔗 API Kullanımı
Projede JSONPlaceholder API kullanılmıştır. Kullanıcı verilerini almak için aşağıdaki endpoint kullanılmıştır:
```bash
https://jsonplaceholder.typicode.com/users
```

## 🛠 CRUD İşlemleri
| İşlem        | Açıklama |
|-------------|----------|
| **Listeleme** | API'den çekilen kullanıcı verileri Redux store'a kaydedilir ve ana sayfada listelenir. |
| **Detay Görüntüleme** | Kullanıcı kartına tıklanınca detaylar ikinci sayfada gösterilir. |
| **Ekleme** | Kullanıcı ekleme butonu ile yeni kullanıcı Redux store'a eklenir. |
| **Düzenleme** | Kullanıcı düzenleme butonu ile bir modal açılır ve bilgiler güncellenir. |
| **Silme** | Kullanıcıyı silme butonu ile Redux store'dan kaldırılır. |


## 📜 Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.




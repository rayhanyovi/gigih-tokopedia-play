Database dari program yang saya buat dibuat dengan menggunakan noSQL MongoDB. Terdapat 1 Database bernama "midterm" dan 3 collection bernama "video_list", "comment_list", dan "product_list". Database berjalan di "mongodb://localhost:27017/midterm".

Berikut struktur tiap collection:
video_list 
{
  "_id": ObjectID, //field default
  "video_id": ObjectID
  "thumbnail_url": String,
  "title": String,
  "shop": String, 
  "promo_id": Number, //belum akan digunakan
  }

product_list 
{
  "_id": ObjectID, //field default
  "product_id": ObjectID,
  "product_name": String,
  "price": Number,
  "rating": Number, 
  "product_url": String, 
  "video_id": ObjectID
  }

comment_list 
{
  "_id": ObjectID, //field default
  "username": String,
  "comment": String,
  "created_at": Date, //belum akan digunakan
  "profile_pict": String, //belum akan digunakan
  "video_id": ObjectID
  }

Terdapat API untuk menampilkan video, produk, dan komentar serta menambahkan komentar baru.

1. Untuk menampilkan video, terdapat method app.get("/") yang merender index.ejs dimana halaman tersebut akan menampilkan seluruh daftar video yang ada. Dari tiap item dari collection, akan digenerate sebuah anchor yang berisikan href = video_id yang mengarahkan pada endpoint "/video/:id". 

2. Untuk menampilkn produk dan komentar pada tiap video, saya menambahkan method app.get("/video/:id/") yang merujuk pada field video_id di tiap collection. API ini akan menggunakan nilai id dari endpoint untuk mencari baris tertentu pada collection "comment_list" dan "product_list" dengan value field video_id yang sama dengan id endpoint.

3. API app.post('/submit-comment') yang digunakan untuk menambahkan komentar baru ke field username dan comment dari collection "comment_list". API ini akan mengembalikan response "Success" jika validation berhasil dan akan mengambalikan response "Fail" jika validation gagal, yg mana akan terjadi jika pengguna tidak mengisi salah satu input.


[HOW TO RUN IN LOCAL]
Berikut hal-hal yang harus dilakukan untuk menjalankan program ini di local.
1. Nyalakan mongoDB dan jalankan connection pada URI "mongodb://localhost:27017" (tanpa tanda kutip)
2. Buat database bernama "midterm"
3. Buka folder db. Pada folder tersebut akan terdapat file .json dari tiap collection. Gunakan MongoDBCompass lalu import ke-3 file tersebut.
4. Clone repository Github ini.
5. Buka terminal pada directory clone dari repository Github ini
6. Ketik perintah "npm instal" (pastikan anda telah menginstall node JS dan npm sebelumnya, which i assume you already had since you are the grader :/ but i will just write it here just in case) lalu tunggu hingga proses download package selesai. 
7. Ketik perintah node app.js
8. Buka browser lalu ketik localhost:3004 karena program berjalan pada port tersebut.


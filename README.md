untuk menjalankan mongodb, sebelumnya membuka comman prompt kemudian menjalankannya dengan perintah :
Mongo --version

Sehingga akan muncul informasi  versi mongodb yang terinstal di PC
Disini versi mongodb yang saya gunakan adalah v3.6.3 dan saya menggunakan windows 10
 
Kemudian masukkan perintah mongod 
 
Lalu saya mengetikkan perintah mongod dbpath
nah disini kita buat folder data di drive C: kemudian di dalam nya bikin folder lagi namanya db
 
Setelah membuat folder tersebut, start kembali cmd dengan perintah mongod
 
Kemudian nanti aka nada pernyataan wait to connecting…………………. , lalu baru kita membuka terminal mongodb. Setelah membuka jika koneksi berhasil maka mongodb akan terakses. 
 
Setelah mongodb terakses, untuk membuat database baru yaitu masukkan perintah db kemudian enter lalu ketikkan nama database yang akan digunakan, missal mydb
 
Kemudian untuk menggunakan database nya maka ketikan perintah use mydb
Dalam hal ini data karyawan yang saya masukkan adalah sebagai berikut :
db = connect("localhost:27017/mydb") 
emp1 = { name : "Zaky", address : "Griya Purwa Asri" }
emp2 = { name : "Ahmad", address : "Purwomartani", email : "zakyahmadaditya@gmail.com" }
emp3 = { name : "Aditya", address : "Kalasan", phone: "08787878787" }
db.employees.insert( emp1 )
db.employees.insert( emp2 )
db.employees.insert( emp3 )

Kemudian untuk mengetahui/ melihat isi dari database perintah yang digunakan adalah sebagai berikut 
db.employees.find().pretty()

 

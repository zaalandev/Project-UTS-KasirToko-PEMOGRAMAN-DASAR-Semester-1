// Mengimpor readline untuk menerima input dari terminal
import * as readline from "readline";

// Membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Menampilkan judul program
console.log("================================");
console.log("      KASIR TOKO SEDERHANA");
console.log("================================");

// Meminta nama pelanggan
rl.question("Masukkan nama pelanggan: ", (namaPelanggan) => {

    // Kondisi Jika Bagian Nama Pelanggan Tidak Di Isi
    if (namaPelanggan.trim() === ""){
        console.log("Tidak Boleh Kosong");
        rl.close();
        return;
    }

    // Kondisi Jika Bagian Nama Pelanggan Di Input Bukan Huruf
    if (!isNaN(Number(namaPelanggan))){
        console.log("Tidak boleh input angka");
        rl.close();
        return;
    }


    // Menampilkan pilihan kategori barang
    console.log("\n=== KATEGORI BARANG ===");
    console.log("1. Makanan");
    console.log("2. Minuman");
    console.log("3. Alat Tulis");

    // Meminta pilihan kategori
    rl.question("Pilih kategori (1-3): ", (inputKategori) => {

        // Kondisi Jika Bagian Input Kategori Tidak Di Isi
        if (inputKategori.trim() === ""){
            console.log("Tidak Boleh Kosong");
            rl.close();
            return;
        }

        // Kondisi Jika Bagian Input Kategori Di Input Bukan Angka
        if (isNaN(Number(inputKategori))){
            console.log("Tidak Boleh Input Huruf");
            rl.close();
            return;
        }

        // Kondisi Jika Bagian Input Kategori Menginputkan Lebih Dari Case Nya
        if (Number(inputKategori) > 3) {
            console.log("Tidak Valid");
            rl.close();
            return;
        }

        // Mengubah input kategori menjadi number
        const kategori = Number(inputKategori);

        // if (!Number.isInteger(kategori)){
        //     console.log("kategori harus Bilangan Bulat");
        //     rl.close();
        //     return;
        // }

        // Variabel untuk menyimpan nama kategori
        let namaKategori: string = "";

        // SWITCH pertama untuk menentukan kategori barang
        switch (kategori) {
            case 1: 
                namaKategori = "Makanan";
                break;

            case 2:
                namaKategori = "Minuman";
                break;

            case 3:
                namaKategori = "Alat Tulis";
                break;

            default:
                namaKategori = "Tidak Valid";
                break;
        }


        // Meminta nama barang
        rl.question("Masukkan nama barang: ", (namaBarang) => {

            // Kondisi Jika Bagian Nama Barang Tidak Di Isi
            if (namaBarang.trim() === ""){
                console.log("Input Tidak Boleh Kosong");
                rl.close();
                return;
            }

            //  Kondisi Jika Bagian Nama Barang Di Input Bukan Huruf
            if (!isNaN(Number(namaBarang))){
                console.log("Input Tidak Boleh Angka");
                rl.close();
                return;
            }

            // Meminta harga barang 
            rl.question("Masukkan harga barang: Rp", (inputHarga) => {

                // Kondisi Jika Bagian Input Harga Tidak Di Isi
                if (inputHarga.trim() === ""){
                    console.log("Tidak Boleh Kosong");
                    rl.close();
                    return;
                }

                // Kondisi Jika Bagian Input Harga Di Input Bukan Angka
                if (isNaN(Number(inputHarga))) {
                    console.log("Input Harus Angka");
                    rl.close();
                    return;
                }


                // Mengubah harga menjadi number
                const harga: number = Number(inputHarga);



                // Meminta jumlah barang
                rl.question("Masukkan jumlah barang: ", (inputJumlah) => {

                    // Kondisi Jika Bagian Input Jumlah Tidak Di Isi
                    if (inputJumlah.trim() === ""){
                        console.log("Tidak Boleh Kosong");
                        rl.close();
                        return;
                    }

                    // Kondisi Jika Bagian Input Jumlah Di Input Bukan Angka
                    if (isNaN(Number(inputJumlah))){
                        console.log("Input Harus Angka");
                        rl.close();
                        return;
                    }


                    // Mengubah jumlah menjadi number
                    const jumlah: number = Number(inputJumlah);

                    // if (!Number.isInteger(jumlah)){
                    //     console.log("Jumlah Barang harus Bilangan Bulat");
                    //     rl.close();
                    //     return;
                    // }

                    // Menghitung subtotal
                    let subtotal: number = harga * jumlah;

                    // Variabel untuk menyimpan diskon
                    let diskon: number = 0;

                    // Memeriksa apakah jumlah barang valid
                    if (jumlah <= 0) {
                        console.log("Jumlah barang tidak valid.");
                        rl.close();
                        return;
                    }


                    // Meminta status member
                    rl.question("Apakah pelanggan member? (y/n): ", (inputMember) => {

                        // Kondisi Jika Bagian Input Member Tidak Di Isi
                        if (inputMember.trim() === ""){
                            console.log("Tidak Boleh Kosong");
                            rl.close();
                            return;
                            
                        }

                        // Kondisi Jika Bagian Input Member Tidak Di Isi Sesuai Dengan ketentuan
                        if (inputMember.toLowerCase() !== "y" && inputMember.toLowerCase() !== "n"){
                            console.log("Input Tidak Valid, Silahkan Masukkan Y / N")
                            rl.close();
                            return;
                        }

                        // Mengubah input menjadi boolean
                        let isMember: boolean = inputMember.toLowerCase() === "y";

                        let statusMember : String;

                        if (isMember === true) {
                            statusMember = "Member";
                        } else {
                            statusMember = "Non Member";
                        }

                        // Menentukan Untuk Mendapatkan Diskon 5%
                        if (jumlah >= 3) {                   

                            // Mengecek status member
                            if (isMember === true) {          

                                // Mengecek subtotal minimal
                                if (subtotal >= 100000) {    

                                    // Member mendapat diskon 5%
                                    diskon = subtotal * 0.05;
                                }
                            }
                        }

                        // Menentukan diskon berdasarkan subtotal
                        if (subtotal >= 200000) {

                            // Diskon 10% jika subtotal minimal Rp200.000
                            diskon += subtotal * 0.10;

                        } else if (subtotal >= 100000) {

                            // Diskon 5% jika subtotal minimal Rp100.000
                            diskon += subtotal * 0.05;

                        } else {

                            // Tidak mendapat diskon tambahan
                            diskon += 0;
                        }

                        // Menghitung total setelah diskon
                        let totalBayar: number = subtotal;

                        // Mengurangi total dengan diskon
                        totalBayar -= diskon;

                        // Menampilkan pilihan metode pembayaran
                        console.log("\n=== METODE PEMBAYARAN ===");
                        console.log("1. Cash");
                        console.log("2. QRIS");
                        console.log("3. Debit");

                        // Meminta pilihan pembayaran
                        rl.question("Pilih pembayaran (1-3): ", (inputPembayaran) => {

                            // Kondisi Jika Bagian Input Pembayaran Tidak Di Isi
                            if (inputPembayaran.trim() === ""){
                                console.log("Tidak Boleh Kosong")
                                rl.close();
                                return;
                            }

                            // Kondisi Jika Bagian Input Pembayaran Di Input Bukan Angka
                            if (isNaN(Number(inputPembayaran))){
                                console.log("Tidak Boleh Input Huruf")
                                rl.close();
                                return;
                            }

                            // Kondisi Jika Bagian Input Pembayaran Menginputkan Lebih Dari Case Nya
                            if (Number(inputPembayaran) > 3) {
                                console.log("Tidak Valid");
                                rl.close();
                                return;
                            }

                            // Mengubah input pembayaran menjadi number
                            const pembayaran = Number(inputPembayaran);

                            // Variabel metode pembayaran
                            let metodePembayaran: string = "";

                            // Variabel biaya admin
                            let biayaAdmin: number = 0;

                            // SWITCH kedua untuk menentukan pembayaran
                            switch (pembayaran) {
                                case 1:
                                    metodePembayaran = "Cash";
                                    biayaAdmin = 0;
                                    break;

                                case 2:
                                    metodePembayaran = "QRIS";
                                    biayaAdmin = 1000;
                                    break;

                                case 3:
                                    metodePembayaran = "Debit";
                                    biayaAdmin = 2500;
                                    break;

                                default:
                                    metodePembayaran = "Tidak Valid";
                                    biayaAdmin = 0;
                                    break;
                            }

                            // Menambahkan biaya admin
                            totalBayar += biayaAdmin;

                            // Menampilkan hasil transaksi
                            console.log("\n================================");
                            console.log("          STRUK KASIR");
                            console.log("================================");
                            console.log("Pelanggan     : " + namaPelanggan);
                            console.log("Kategori      : " + namaKategori);
                            console.log("Barang        : " + namaBarang);
                            console.log("Harga         : Rp" + harga);
                            console.log("Jumlah        : " + jumlah);
                            console.log("Member        : " + statusMember);
                            console.log("--------------------------------");
                            console.log("Subtotal      : Rp" + subtotal);
                            console.log("Diskon        : Rp" + diskon);
                            console.log("Biaya Admin   : Rp" + biayaAdmin);
                            console.log("Pembayaran    : " + metodePembayaran);
                            console.log("--------------------------------");
                            console.log("TOTAL BAYAR   : Rp" + totalBayar);
                            console.log("================================");
                            console.log("Terima kasih telah berbelanja!");

                            // Menutup readline
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});
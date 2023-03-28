import {question} from "readline-sync";

// Nhập số lượng từ bàn phím
function nhapSoluong(): number {
    let soLuong: number = Number(question('Nhap so luong: '));
    return soLuong;
}

// Nhập đơn giá từ bàn phím
function nhapDongia(): number {
    let donGia: number = Number(question('Nhap don gia: '));
    return donGia;
}

/**
 * Tính tiền
 * @param soLuong số lượng
 * @param donGia đơn giá
 * @returns trả về số tiền
 */
function Tien(soLuong: number, donGia: number): number {
    let Tien: number = soLuong * donGia;
    return Tien;
}

/**
 * Chạy hàm trả ra kết quả Tiền và Thuế GTGT.
 * @returns trả về kết quả Tiền sau khi truyền đối số
 */
function run_ketqua(): number {
    let sl: number = nhapSoluong();
    let dg: number = nhapDongia();

    let tien: number = Tien(sl, dg);
    console.log('Tien: ',tien);
    return tien;
}

let m: number = run_ketqua();
let thueGTGT: number = m*0.1;       // Tính thuế sau khi đã có số Tiền,
console.log('Thue GTGT: ',thueGTGT);
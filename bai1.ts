import {question} from "readline-sync";

const PI: number = 3.14;

//Lấy bán kính R từ bàn phím
function banKinh(): number {
    let R: number = Number(question('Nhap ban kinh: '));
    return R;
}

/**
 * hàm tính chu vi
 * @param r bán kính
 * @returns Trả về chu vi đường tròn
 */
function chuVi(r: number): number {
    let chuVi: number = 2*PI*r;
    return chuVi;
}

/**
 * hàm tính diện tích
 * @param r bán kính
 * @returns trả về diện tích
 */
function dienTich(r: number): number {
    let dienTich: number = PI*r*r;
    return dienTich;
}

/**
 * hàm chạy ra kết quả tính toán chu vu và diện tích
 */
function run_result(): void {
    let r: number = banKinh();
    
    let CV: number = chuVi(r);
    let S: number = dienTich(r);

    console.log('Chu vu: ',CV);
    console.log('Dien tich: ',S);
}

run_result();
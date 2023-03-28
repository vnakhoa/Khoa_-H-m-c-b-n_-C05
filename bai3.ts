import {question} from "readline-sync";

/**
 * Lấy ra năm hợp lệ từ bàn phím
 * @returns năm hợp lệ
 */
function nhapNam(): number {
    let Nam: number;
    do{ 
        console.log('Khong hop le. Nhap lai (nam >= 0)')
        Nam = Number(question('Nhap nam: '));
    }while(Nam <0);
    return Nam;
}

/**
 * Kiểm tra năm nhuận
 * @param nam năm 
 * @returns Kết quả năm đó có phải năm nhuận hay không.
 */
function laNamnhuan(nam: number): string {
    let result: string = "";
    if((nam%4 == 0 && nam%100 != 0) || nam%400 == 0) {
        result = "Yes";
        return result;
    }
    else {
        result = "No";
        return result;
    }
}

/**
 * Chạy hàm kiểm tra năm nhuận
 */
function run_laNamnhuan(): void {
    let nam: number = nhapNam();
    let ketqua: string = laNamnhuan(nam);
    console.log(ketqua);
}

run_laNamnhuan();
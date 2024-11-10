import localFont from "next/font/local"
export const poppins = localFont({
    src: [{
        path: "./Poppins-Medium.ttf",
        weight: "400",
        style: "normal",
    }],
    variable: "--font-poppins",

})
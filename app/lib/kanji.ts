export interface KanjiCard {
  id: number;
  character: string;
  vietnamese: string;
  example: string;
  meaning: string;
}

export const kanji: KanjiCard[] = [
  {
    id: 1,
    character: "一",
    vietnamese: "Một",
    example: "一つ (hitotsu)",
    meaning: "Số một, đơn lẻ",
  },
  {
    id: 2,
    character: "二",
    vietnamese: "Hai",
    example: "二つ (futatsu)",
    meaning: "Số hai, đôi",
  },
  {
    id: 3,
    character: "三",
    vietnamese: "Ba",
    example: "三つ (mittsu)",
    meaning: "Số ba, tam",
  },
  {
    id: 4,
    character: "四",
    vietnamese: "Bốn",
    example: "四つ (yottsu)",
    meaning: "Số bốn, tứ",
  },
  {
    id: 5,
    character: "五",
    vietnamese: "Năm",
    example: "五つ (itsutsu)",
    meaning: "Số năm, ngũ",
  },
  {
    id: 6,
    character: "六",
    vietnamese: "Sáu",
    example: "六つ (muttsu)",
    meaning: "Số sáu, lục",
  },
  {
    id: 7,
    character: "七",
    vietnamese: "Bảy",
    example: "七つ (nanatsu)",
    meaning: "Số bảy, thất",
  },
  {
    id: 8,
    character: "八",
    vietnamese: "Tám",
    example: "八つ (yattsu)",
    meaning: "Số tám, bát",
  },
  {
    id: 9,
    character: "九",
    vietnamese: "Chín",
    example: "九つ (kokonotsu)",
    meaning: "Số chín, cửu",
  },
  {
    id: 10,
    character: "十",
    vietnamese: "Mười",
    example: "十 (juu)",
    meaning: "Số mười, thập",
  },
];

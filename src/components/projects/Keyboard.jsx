import React, { useState } from "react";
import "./keybaord.css";

export default function Keyboard() {
  const [inputText, setInputText] = useState("");
  const [isCaps, setIsCaps] = useState(false);
  const [isShift, setIsShift] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  const handleKeyClick = (key) => {
    if (key === "Caps Lock") {
      setIsCaps(!isCaps);
    } else if (key === "Shift") {
      setIsShift(!isShift);
    } else if (key === "Lang") {
      // تبديل اللغة بين الإنجليزية والعربية
      setIsArabic(!isArabic);
    } else {
      const newContent = inputText + key;
      setInputText(newContent);
    }
  };

  // تعريف دوال التعامل مع الحروف
  const handleSpaceKey = () => setInputText(inputText + " ");
  const handleEnterKey = () => setInputText(inputText + "\n");
  const handleDeleteKey = () => setInputText(inputText.slice(0, -1));

  return (
    <div className="keyboard">
      <div className="textcontainer">
        <pre>{inputText}</pre>
      </div>
      <div className="keyboardcontainer">
        <div className="container_key">
          {isArabic ? (
            <>
              {/* الحروف العربية */}
              <div className="row">
                <div className="key" onClick={() => handleKeyClick("ض")}>
                  ض
                </div>
                <div className="key" onClick={() => handleKeyClick("ص")}>
                  ص
                </div>
                <div className="key" onClick={() => handleKeyClick("ث")}>
                  ث
                </div>
                <div className="key" onClick={() => handleKeyClick("ق")}>
                  ق
                </div>
                <div className="key" onClick={() => handleKeyClick("ف")}>
                  ف
                </div>
                <div className="key" onClick={() => handleKeyClick("غ")}>
                  غ
                </div>
                <div className="key" onClick={() => handleKeyClick("ع")}>
                  ع
                </div>
              </div>

              <div className="row">
                <div className="key" onClick={() => handleKeyClick("ه")}>
                  ه
                </div>
                <div className="key" onClick={() => handleKeyClick("خ")}>
                  خ
                </div>
                <div className="key" onClick={() => handleKeyClick("ح")}>
                  ح
                </div>
                <div className="key" onClick={() => handleKeyClick("ج")}>
                  ج
                </div>
                <div className="key" onClick={() => handleKeyClick("ش")}>
                  ش
                </div>
                <div className="key" onClick={() => handleKeyClick("س")}>
                  س
                </div>
                <div className="key" onClick={() => handleKeyClick("ي")}>
                  ي
                </div>
              </div>
              <div className="row">
                <div className="key" onClick={() => handleKeyClick("ب")}>
                  ب
                </div>
                <div className="key" onClick={() => handleKeyClick("ل")}>
                  ل
                </div>
                <div className="key" onClick={() => handleKeyClick("ا")}>
                  ا
                </div>
                <div className="key" onClick={() => handleKeyClick("ت")}>
                  ت
                </div>
                <div className="key" onClick={() => handleKeyClick("ن")}>
                  ن
                </div>
                <div className="key" onClick={() => handleKeyClick("م")}>
                  م
                </div>
                <div className="key" onClick={() => handleKeyClick("ك")}>
                  ك
                </div>
                <div className="key" onClick={() => handleKeyClick("ظ")}>
                  ظ
                </div>
                <div className="key" onClick={() => handleKeyClick("ط")}>
                  ط
                </div>
                <div className="key" onClick={() => handleKeyClick("ذ")}>
                  ذ
                </div>
              </div>
              <div className="row">
                <div className="key" onClick={() => handleKeyClick("ء")}>
                  ء
                </div>
                <div className="key" onClick={() => handleKeyClick("د")}>
                  د
                </div>
                <div className="key" onClick={() => handleKeyClick("ؤ")}>
                  ؤ
                </div>
                <div className="key" onClick={() => handleKeyClick("ر")}>
                  ر
                </div>
                <div className="key" onClick={() => handleKeyClick("ى")}>
                  ى
                </div>
                <div className="key" onClick={() => handleKeyClick("ة")}>
                  ة
                </div>
                <div className="key" onClick={() => handleKeyClick("و")}>
                  و
                </div>
                <div className="key" onClick={() => handleKeyClick("ز")}>
                  ز
                </div>
                <div className="key" onClick={() => handleKeyClick("ظ")}>
                  ظ
                </div>
                <div className="key" onClick={() => handleKeyClick("ش")}>
                  ش
                </div>
              </div>
              <div className="row">
                <div className="key" onClick={() => handleKeyClick("ئ")}>
                  ئ
                </div>
                <div className="key" onClick={() => handleKeyClick("لإ")}>
                  لإ
                </div>
                <div className="key" onClick={() => handleKeyClick("آ")}>
                  آ
                </div>
                <div className="key" onClick={() => handleKeyClick("لأ")}>
                  لأ
                </div>
                <div className="key" onClick={() => handleKeyClick("لآ")}>
                  لآ
                </div>
                <div className="key" onClick={() => handleKeyClick("أ")}>
                  أ
                </div>
              </div>
              <div className="row">
                <div className="key" onClick={() => handleKeyClick("إ")}>
                  إ
                </div>
                <div className="key" onClick={() => handleKeyClick("ى")}>
                  ى
                </div>
                <div className="key" onClick={() => handleKeyClick("ئ")}>
                  ئ
                </div>
                <div className="key" onClick={() => handleKeyClick("؟")}>
                  ؟
                </div>
                <div className="key" onClick={() => handleKeyClick(" ")}>
                  <span>Space</span>
                </div>
                {/* زر لتبديل اللغة */}
                <div className="key" onClick={() => handleKeyClick("Lang")}>
                  <span>عربي</span>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* الحروف الإنجليزية */}
              <div className="key" onClick={() => handleKeyClick("q")}>
                q
              </div>
              <div className="key" onClick={() => handleKeyClick("w")}>
                w
              </div>
              <div className="key" onClick={() => handleKeyClick("e")}>
                e
              </div>
              <div className="key" onClick={() => handleKeyClick("r")}>
                r
              </div>
              <div className="key" onClick={() => handleKeyClick("t")}>
                t
              </div>
              <div className="key" onClick={() => handleKeyClick("y")}>
                y
              </div>
              <div className="key" onClick={() => handleKeyClick("u")}>
                u
              </div>
              <div className="key" onClick={() => handleKeyClick("i")}>
                i
              </div>
              <div className="key" onClick={() => handleKeyClick("o")}>
                o
              </div>
              <div className="key" onClick={() => handleKeyClick("p")}>
                p
              </div>
              <div className="key" onClick={() => handleKeyClick(" ")}>
                <span>Space</span>
              </div>
              {/* زر لتبديل اللغة */}
              <div className="key" onClick={() => handleKeyClick("Lang")}>
                <span>English</span>
              </div>
            </>
          )}
          {/* تعريف الأزرار الأخرى */}
          <div className="key" onClick={handleDeleteKey}>
            Backspace
          </div>
          <div className="key" onClick={handleEnterKey}>
            Enter
          </div>
          {/* قم بإضافة المزيد من الأزرار بناءً على الحاجة */}
        </div>
      </div>
    </div>
  );
}

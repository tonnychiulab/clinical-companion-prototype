# 診前同行｜Clinical Companion

一個以「減少醫師輸入」為核心的家庭醫療介面原型。病人、家屬或家庭照護者可以先用熟悉的語言描述狀況，醫師接手時查看整理後的病人故事、缺漏資訊與待確認事項。

## 線上示範

[開啟 GitHub Pages 線上示範](https://tonnychiulab.github.io/clinical-companion-prototype/)

> 部署後，請將網址中的 `YOUR_GITHUB_USERNAME` 替換成你的 GitHub 帳號；如果 Repository 名稱不同，也請一併修改網址末段。

> [!WARNING]
> **本專案僅供介面原型、流程設計與教學展示。** 內容全部為虛構示範資料，不構成醫療建議、診斷、治療、分流或轉診依據，也不可取代合格醫療專業人員的臨床判斷。請勿輸入真實病人姓名、身分證字號、病歷、聯絡方式、影像、檢驗結果或其他可識別個人的健康資料；未經完整的醫療驗證、資安檢測、權限控管與法規評估前，不得用於真實臨床環境。

## 功能

- 正體中文、英文介面即時切換
- 醫師介面語言與病人／照護者語言分離
- 跨語言照護示範：保留原文、整理翻譯與說話者
- 一鍵載入示範案例
- 臨床接診、偏鄉協作、教學模擬三種模式
- 病人／照護者逐步式診前填寫
- 常見主訴快速點選
- 瀏覽器支援時可使用 Web Speech API 語音輸入
- 醫師快速補問、補充紀錄、確認摘要
- 匯出純文字交接摘要
- 桌機、平板及手機自適應版面
- 不依賴框架、外部套件或 CDN

## 檔案結構

```text
clinical-companion-prototype/
├─ index.html
├─ styles.css
├─ app.js
├─ README.md
└─ .nojekyll
```

核心程式為三個獨立檔案：`index.html`、`styles.css`、`app.js`。

## 本機執行

直接開啟 `index.html` 即可使用大部分功能。

語音辨識通常需要在 HTTPS 或 localhost 環境執行。可在專案目錄使用：

```bash
python -m http.server 8000
```

再開啟：

```text
http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 建立新的 Repository。
2. 將本專案所有檔案上傳到 Repository 根目錄。
3. 進入 Repository 的 **Settings**。
4. 選擇 **Pages**。
5. 在 **Build and deployment** 中選擇 **Deploy from a branch**。
6. Branch 選擇 `main`，資料夾選擇 `/ (root)`。
7. 按下 **Save**。
8. 等待 GitHub Pages 顯示公開網址。

由於所有路徑均為相對路徑，因此可直接部署在專案型 Pages 網址下。

部署完成後，網址格式通常為：

```text
https://YOUR_GITHUB_USERNAME.github.io/clinical-companion-prototype/
```

記得同步更新本 README 上方的「線上示範」連結。

## 一鍵示範

首頁或頂部點擊「載入示範」，會載入以下虛構情境：

- 78 歲女性病人
- 外籍家庭照護者以英文說明
- 起身頭暈、食慾下降、險些跌倒
- 原始英文與中文整理並列
- 顯示生命徵象、缺漏資訊與優先確認事項

右上角「更多功能」另有一般候診、偏鄉協作及教學模擬案例。

## 隱私與技術限制

- 不連接後端或真正 AI 模型
- 不上傳資料
- 不永久保存語音
- 僅使用 `sessionStorage` 暫存目前分頁狀態
- 關閉分頁後由瀏覽器清除暫存狀態
- 不可輸入真實病人資料
- 翻譯內容為示範資料，不是正式醫療翻譯

## 後續整合方向

正式產品可在不改變醫師操作方式的前提下，於後端串接：

- Flowise 或其他流程編排服務
- 語音辨識與醫療詞彙校正
- 專業醫療翻譯服務
- FHIR Questionnaire / QuestionnaireResponse
- HIS / EMR
- 身分驗證、權限控管與完整稽核紀錄

醫師工作台不應顯示模型供應商、模型版本、Token 或 API 設定。

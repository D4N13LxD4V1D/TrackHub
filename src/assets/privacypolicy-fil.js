const privacy = `# Patakaran sa Privacy

Ang TrackHub ay ginawa nang may pagpapahalaga sa prayoridad nitong may mataas na kalidad ng seguridad pagdating  sa user privacy. Sa kabila ng pangangailangan nating protektahan ang publiko laban sa COVID-19 virus, kinakailangan din nating protektahan ang ating personal privacy, kaya naman ang TrackHub ay gumagamit ng privacy-first approach. Binigyang prioridad ng Trackhub ang idisenyo ang app na ito nang may user privacy. Kailangang mabalanse and pagprotekta sa public health at ang pagpapanatili sa personal privacy, gumagamit ang Trackhub ng privacy-first approach. Ang Trackhub ay idinisenyo upang maging mahirap para sa Trackhub at iba pa na makuha ang impormasyong iyong isinumite, gagamitin lamang ang impormasyong ito upang mapagana ang exposure notification sa gitna ng pandemyang ito.

## Anong impormasyon ang aming ginagamit?
Kalakip ang Google at Apple [approach](https://www.apple.com/covid19/contacttracing), ang Trackhub ay dinisensyo upang mangolekta ang gumamit ng konting personal na impormasyon para mapagana ang exposure notification. Hindi kinokolekta o ginagamit ng Trackhub ang ano mang personally-identifying na impormasyon maliban sa:
- Random IDs (also known as Rolling Proximity Identifiers)
  * Ang mga rotating identifiers na ito ay ibinabahagi gamit ang Bluetooth sa pagitan ng mga users na malapit sayo na nag install ng app. Ang prosesong ito ay inaayos ng iyong device at hindi ng Trackhub.
  * Ang mga identifiers na ito ay binubuo ng iyong device at dito din iniipon, hindi sa Trackhub, at ginagamit lamang para payagan ang Trackhub at ang iyong device na tignan kung nagupload ka o kung may ibang tao ang nagupload.
- Temporary Exposure Keys (also known as Diagnosis Keys)
  * Kapag ikaw ay nakatanggap ng positibong test result, ikaw ay bibigyan ng Temporary Exposure Key na iyong iuupload at ibabahagi sa iba pang gumagamit ng app, ito ay kung iyo lamang nanaisin. Hawak mo ang desisyon sa kung iuupload mo ba ang Temporary Exposure Key o hindi.
  * Itinatabi ng Trackhub and iyong Temporary Exposure Key nang labing tatlong araw.
  * Maaring gamitin ng ibang users ang Trackhub para malaman kung nagkaroon sila ng kontak sa kahit na anong Random IDs na nakaugnay sa Temporary Exposure Key (at kung sila ba ay nagkaroon ng kontak sa isang may sakit na indibwal)
- App Usage Logs
*Gaya ng ibang app o internet service, ang Trackhub ay awtomatikong naggagawa ng logs kapag ginamit mo ang service. Kasama sa logs na ito ang mga impormasyon tungkol sa iyong device. Ginagamit namin ang impormasyong ito para ayusin ang mga problema sa Trackhub.
  * Ang mga log na ito ay walang kasamang Random IDs o Temporary Exposure Keys, at hindi din pwedeng gamitin para pagsamahin ang alinman sa Rolling Proximity Identifiers o Temporary Exposure Key pabalik sa iyo.
  * Ang mga log na ito ay awtomatiko na mabubura pitong araw matapos ito mabuo.
Hindi kinokolekta ng Trackhub ang location data sa iyong device, at hindi din kinokolekta o ibinabahagi ang mga impormasyon sa Random IDs o Temporary Exposure Keys na iyong binuo.

## Kailan ibinabahagi ang iyong impormasyon?
Hindi namin ibabahagi kanin man ang anuman sa iyong personal na impormasyon, maliban kung:
- Kapag ikaw ay nag upload ng Temporary Exposure Key ay ibabahagi ng Trackhub ang impormasyong ito (hindi ito maaring makuha ng isang indibidwal na walang access sa iyong device) sa ibang device na naugnay sa iyong device, ito ang ipinaliwanag sa Google at Apple [Exposure Notification Framework](https://www.apple.com/covid19/contacttracing).
- Iniipon namin ang iyong personal na impormasyon sa encrypted na paraan gamit ang Amazon Web Services. Maaring ipunin ng Amazon Web Services ang impormasyong ito sa labas ng Canada, kasama na ang United States.

## Paano pinoprotektahan ang iyong impormasyon?
Pinoprotektahan ng Trackhub ang Temporary Exposure Keys gamit ang [Exposure Notification Framework](https://www.apple.com/covid19/contacttracing) ng Google at Apple, na naglalaman ng mga kinakailangan sa kung paano ma-encrypt at malipat ang impormasyong ito. Hindi iniipon o binubo ng Trackhub ang iyong Random IDs—na ginagamit ng iyong device.

## Ang Karapatan sa Sariling Impormasyon

Dahil hindi kayang pagsamahin ang Temporary Exposure Key o ang Access Logs mo sa iyo nang wala ang iyong device, wala kaming paraan upang mabura ang impormasyong ito kapag inyong hiniling. Sa kabila nito, kontrolado mo ang pag gamit ng app na ito. Maaari mong isara ang exposure notification at burahin ang exposure logs na nasa iyong device ano mang oras mo gusto. Maaari mo ding burahin ang Trackhub kahit kailan mo gustuhin. Kapag ginawa mo ito, lahat ng Temporary Encryption Keys na nasa Trackhub ay mabubura.

Kapag mayroon kayong mga katanungan o reklamo tungkol sa privacy practices ng Trackhub ay maaari nyo kaming kontakin sa privacy@trackhub.app.

Last updated April 24, 2021
`;

export default privacy;

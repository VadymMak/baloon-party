import React from "react";
import { Helmet } from "react-helmet";

const PageMeta: React.FC = () => {
  return (
    <Helmet>
      <html lang="sk" /> {/* Set the language to Slovak */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="description"
        content="Sme profesionálna dekoratérska služba v Trenčíne, ktorá vytvára nezabudnuteľné fotosteny a dekorácie pre svadby, narodeninové oslavy, firemné akcie a špeciálne udalosti. Prinášame jedinečnú atmosféru, farebnosť a kreativitu, aby každá oslava bola výnimočná."
      />
      <meta
        name="keywords"
        content="Trenčín, dekorácie, fotosteny, svadby, narodeniny, firemné akcie, oslavy, party dekorácie, personalizovaný dizajn, eventy, kreatívne dekorácie, fototapety, dekorácia pre udalosti"
      />
      <meta name="author" content="Balloon Party00" />
      <meta
        property="og:title"
        content="Balloon Party00 - Tvorba dekorácií a fotostien pre nezabudnuteľné oslavy"
      />
      <meta
        property="og:description"
        content="Vytvárame jedinečné dekorácie a fotosteny pre nezabudnuteľné chvíle a oslavy po celom Slovensku."
      />
      <meta property="og:image" content="/images/my-photo-wall.jpg" />
      <meta property="og:url" content="https://baloon-party.netlify.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ubmarket" />
      <meta
        name="twitter:title"
        content="Balloon Party00 - Tvorba dekorácií a fotostien pre nezabudnuteľné oslavy"
      />
      <meta
        name="twitter:description"
        content="Vytvárame jedinečné dekorácie a fotosteny pre nezabudnuteľné chvíle a oslavy po celom Slovensku."
      />
      <meta name="twitter:image" content="/images/twitter-large-image.png" />
      {/* Instagram, Telegram, WhatsApp, TikTok, and Viber are usually referenced directly with links */}
      <meta
        name="instagram"
        content="https://www.instagram.com/your-instagram-handle"
      />
      <meta name="telegram" content="https://t.me/your-telegram-handle" />
      <meta name="whatsapp" content="https://wa.me/your-whatsapp-number" />
      <meta
        name="tiktok"
        content="https://www.tiktok.com/@your-tiktok-handle"
      />
      <meta name="viber" content="viber://chat?number=your-phone-number" />
    </Helmet>
  );
};

export default PageMeta;

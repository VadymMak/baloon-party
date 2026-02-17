import React from "react";
import { Helmet } from "react-helmet";

const PageMeta: React.FC = () => {
  return (
    <Helmet>
      <html lang="sk" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="description"
        content="Sme profesionálna dekoratérska služba v Trenčíne, ktorá vytvára nezabudnuteľné fotosteny a dekorácie pre svadby, narodeninové oslavy, firemné akcie a špeciálne udalosti. Prinášame jedinečnú atmosféru, farebnosť a kreativitu, aby každá oslava bola výnimočná."
      />
      <meta
        name="keywords"
        content="Trenčín, dekorácie, fotosteny, svadby, narodeniny, firemné akcie, oslavy, party dekorácie, balónové dekorácie, eventy, kreatívne dekorácie, balón party Trenčín"
      />
      <meta name="author" content="Valeriia Mukhina" />
      <link rel="canonical" href="https://baloon-party00.sk/" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Balón Party — Balónové dekorácie a party služby v Trenčíne"
      />
      <meta
        property="og:description"
        content="Vytvárame jedinečné dekorácie a fotosteny pre nezabudnuteľné chvíle a oslavy v Trenčíne a okolí."
      />
      <meta property="og:image" content="https://baloon-party00.sk/images/my-photo-wall.webp" />
      <meta property="og:url" content="https://baloon-party00.sk/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sk_SK" />
      <meta property="og:site_name" content="Balón Party" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Balón Party — Balónové dekorácie a party služby v Trenčíne"
      />
      <meta
        name="twitter:description"
        content="Vytvárame jedinečné dekorácie a fotosteny pre nezabudnuteľné chvíle a oslavy v Trenčíne a okolí."
      />
      <meta name="twitter:image" content="https://baloon-party00.sk/images/my-photo-wall.webp" />
    </Helmet>
  );
};

export default PageMeta;
import React from 'react';
import Card from '@/components/Card';

export interface IPost {
  title: string;
  description: string; 
  src: string;
}

const blogposts: IPost[] = [
  {
    title: "Gustav Klimt – Il bacio.",
    description: "Il celebre Bacio è stato realizzato nel 1907-1908 dal pittore austriaco Gustav Klimt. Quest’opera, vero capolavoro dell’arte della Belle Époque, è dipinta in stile liberty, su tela con decorazioni e mosaici con sfondo d’oro. Klimt si è ispirato ai mosaici di Ravenna, che amava molto. L’eleganza delle figure stagliate sul fondo piatto, la preziosità dei loro abiti, l’atmosfera poetica, mistica e sensuale che celebra la fusione dell’uomo e della donna nell’atto dell’abbraccio e del bacio, rendono quest’opera un’icona perfetta della bellezza e dell’amore.",
    src: "https://www.dipintimoderni.it/wp-content/uploads/2017/11/Il-bacio-Klimt.jpg"
  },
  {
    title: "Van Gogh – Notte stellata",
    description: "Notte stellata è un dipinto del pittore olandese Vincent van Gogh, realizzato nel 1889 e conservato al Museum of Modern Art di New York. Il dipinto raffigura un paesaggio notturno di Saint-Rémy-de-Provence, poco prima del sorgere del sole. È forse il notturno più celebre tra quelli di Vincent van Gogh. Qui cui il cielo, tra le luci e le spirali delle stelle, sembra sprigionare un’energia cosmica piena di significati simbolici. L’energia sprigionata dagli azzurri, dai blu e dai gialli, e i tocchi ravvicinati del colore contribuiscono a dare all’insieme un effetto mosso e allo stesso tempo sognante, come se le stelle ruotassero.",
    src: "https://www.dipintimoderni.it/wp-content/uploads/2017/11/Notte-stellata-con-cipressi.jpg"
  },
  {
    title: "Edvard Munch – L’urlo",
    description: "Chiamato anche Il grido, questo è un celebre dipinto del pittore norvegese Edvard Munch e uno dei quadri più famosi in assoluto. Realizzato nel 1893 su cartone con olio, tempera e pastello, come per altre opere di Munch è stato dipinto in più versioni, quattro in totale. Lo spunto da cui nacque quest’opera è autobiografico; lo stesso Munch così ne parla in una pagina di diario: durante una passeggiata, al tramonto, all’improvviso “… Sentii un urlo attraversare la natura: mi sembrò quasi di udirlo. Dipinsi questo quadro, dipinsi le nuvole come sangue vero.” Da qui i colori allucinati, le figure deformate, il tono fortemente espressionistico dell’insieme. La versione dell’Urlo esposta al Museo Munch è stata oggetto di ben due furti.",
    src: "https://www.dipintimoderni.it/wp-content/uploads/2017/11/urlo-Edvard-Munch.jpg"
  },
  {
    title: "Claude Monet – Le ninfee",
    description: "Le ninfee sono un gruppo di 250 dipinti, realizzati a partire dal 1899 dal pittore impressionista di Claude Monet ed esposti in vari musei di tutto il mondo. Le tele ritraggono le ninfee situate nel bellissimo giardino dell’autore e i loro diversi effetti studiati en plein air, al mutare delle ore del giorno, delle condizioni di luce e dei loro riflessi capovolti sull’acqua e combinati con il cielo e con le sagome degli alberi, in un gioco caleidoscopico di luci, di colori e di rimandi che comunica un senso di pace e di contemplazione. Insieme alla serie dei celebri Girasoli di van Gogh, le ninfee di Monet sono uno dei soggetti floreali più amati di tutti i tempi.",
    src: "https://www.dipintimoderni.it/wp-content/uploads/2017/11/Le-ninfee-Claude-Manet.jpg"
  },
  {
    title: "Salvador Dalí – La persistenza della memoria",
    description: "Conosciuto anche come Gli orologi molli, è un dipinto ad olio su tela realizzato nel 1931 dal pittore spagnolo Salvador Dalí e conservato al Museum of Modern Art di New York. Fu esposto nel 1932 alla mostra retrospettiva dedicata ai surrealisti, nella Galleria Julien Levy di New York, e poco dopo acquistato dal Museum of Modern Art. Si tratta di un capolavoro della pittura surrealista, dal valore filosofico, metafisico, sicuramente simbolico e assolutamente novecentesco. Il tema, infatti, è proprio il tempo, il suo scorrere in rapporto all’esperienza soggettiva che ne fa l’essere umano e al permanere della memoria. Celebre il soggetto: alcuni grandi orologi, non più oggetti di precisa misurazione matematica ma flessibili e sformati come formaggio fuso, raffigurati sullo sfondo di una terra deserta, forse in attesa che tutto fluisca sul paesaggio della memoria.",
    src: "https://www.dipintimoderni.it/wp-content/uploads/2017/11/La-persistenza-della-memoria.jpg"
  },
  {
    title: "Pablo Picasso – Guernica",
    description: "Il celeberrimo quadro di Pablo Picasso fa parte del periodo del “cubismo sintetico” dell’artista, realizzato in memoria del bombardamento della città basca di Guernica che colpì la popolazione civile (26 aprile 1937) nel corso della Guerra civile spagnola. La grande tela fu commissionata a Picasso dal Governo Repubblicano per esporla nel Padiglione spagnolo dell’Esposizione universale di Parigi. Guernica fu presto popolarissima in tutto il mondo, divenendo non solo un simbolo della Guerra civile in Spagna ma una protesta contro la violenza tutte le guerre in generale. Il senso del dramma è reso dall’uso di bianchi, neri e grigi, dalla deformazione dei corpi, dalle linee spezzate e dai gesti disperati delle figure.",
    src: "https://www.dipintimoderni.it/wp-content/uploads/2017/11/Guernica-Picasso.jpg"
  },
];

export default function Home() {
  return (
    <main className="p-10 mx-auto max-w-screen-lg">
      <h1 className="text-4xl font-bold text-center mb-8">The Art Post Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogposts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
    </main>
  );
}

import React from "react";
import "../styles/Blog.css";

export const Blog = () => {
  return (
    <div>
      <header>
        <div className='containerb containerb-flex'>
          <div className='site-title'>
            <h2 className="blogtitre">Découvrez Notre Blog </h2>
           
          </div>
         
        </div>
      </header>

      <div className="containerb containerb-flex">
        <main role="main">

          <article className="article-featured">
            <h2 className="article-title">Le pouvoir du partage : Comment donner peut changer des vies</h2>
            <img className="imgb"  src="\images\im14.png" alt="simple white desk on a white wall with a plant on the far right side" />
            <p className="article-info">Juin 23, 2023 </p>
            <p className="article-body">Le pouvoir du partage et de la générosité est une force puissante qui peut avoir un impact significatif sur la vie des personnes. En donnant, que ce soit de l'argent, du temps, des compétences ou des ressources,</p>
            <a href="/Articlep" className="article-read-more">CONTINUEZ A LIRE</a>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Maximiser l'impact de votre don : 5 conseils pratiques</h2>
              <p className="article-body">Donner est un acte généreux qui peut changer des vies, mais il est également important de s'assurer que notre don a un impact maximal. Pour que votre don soit efficace et qu'il apporte une réelle différence,</p>
              <a href="/Articlem" className="article-read-more">CONTINUEZ A LIRE</a>
            </div>
            <div className="article-recent-secondary">
              <img className="imgb" src="\images\im13.png" alt="two dumplings on a wood plate with chopsticks"  />
              <p className="article-info">Mai 19, 2023 </p>
            </div>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Soutenir les causes locales : Les dernières initiatives caritatives en Algérie</h2>
              <p className="article-body">En Algérie, de nombreuses initiatives caritatives émergent pour soutenir les causes locales et apporter une aide concrète aux personnes dans le besoin. Ces initiatives, mises en œuvre par des organisations et des individus engagés,</p>
              <a href="/Articles" className="article-read-more">CONTINUEZ A LIRE</a>
            </div>
            <div className="article-recent-secondary">
              <img className="imgb" src="\images\im12.png" alt="a chair white chair at a white desk on a white wall" />
              <p className="article-info">Mars 12, 2019 </p>
            </div>
          </article>

          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Réduire le gaspillage au quotidien : Des gestes simples, un grand impact</h2>
              <p className="article-body">Le gaspillage est un problème majeur dans notre société moderne, mais chacun d'entre nous peut faire une différence en adoptant des gestes simples dans notre quotidien. En réduisant le gaspillage, nous pouvons contribuer à la préservation des ressources naturelles, </p>
              <a href="/Articler" className="article-read-more">CONTINUEZ A LIRE</a>
            </div>
            <div className="article-recent-secondary">
              <img className="imgb" src="\images\im15.png" alt="a green plant in a clear, round vase with water in it"  />
              <p className="article-info">Mars 3, 2019 </p>
            </div>
          </article>
        </main>

        <aside className="sidebar">

          <div className="sidebar-widget">
            <h2 className="widget-title">A-propos de GENERO</h2>
            <img className="imgb" src="\images\Genero.png" alt="john doe"  />
            <p className="widget-body"> Genero est une application novatrice qui permet à chacun de donner des objets et de la nourriture entre particuliers en Algérie, rendant ainsi le don accessible à tous, peu importe l'endroit ou le moment.</p>
          </div>

          <div className="sidebar-widget">
            <h2 className="widget-title">NOS DERNIERS ARTICLES </h2>
            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">Maximiser l'impact de votre don</h3>
              <img className="imgb" src="\images\im13.png" alt="two dumplings on a wood plate with chopsticks"  />
            </div>
            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">Soutenir les causes locales</h3>
              <img className="imgb" src="\images\im12.png" alt="a chair white chair at a white desk on a white wall" />
            </div>
            <div className="widget-recent-post">
              <h3 className="widget-recent-post-title">Réduire le gaspillage au quotidien</h3>
              <img className="imgb" src="\images\im15.png" alt="a green plant in a clear, round vase with water in it"  />
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
};

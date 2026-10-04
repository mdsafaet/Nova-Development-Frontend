import TextLink from "./TextLink";
export default function NewsCard({ item }) {
  return <article className="nova-news-item">
    <div className="nova-news-item-image"><img src={item.image} alt={item.title} loading="lazy" /></div>
    <div className="nova-news-item-content"><span>{item.date}</span> <small>{item.market}</small><h3>{item.title}</h3><TextLink to={item.to ?? "/news-single"}>Read story</TextLink></div>
  </article>;
}

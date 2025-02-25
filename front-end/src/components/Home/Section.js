import Card from './Card';
import "./section.css";

const Section = ({ title, items }) => {
  return (
    <section className="py-12 cream px-10">
      <h2 className="text-3xl font-bold mb-6 border-l-4 gold-border pl-2 ml-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Section;

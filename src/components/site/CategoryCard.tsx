import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: {
    id: string;
    label: string;
    img: string;
    path: string;
  };
  idx: number;
}

const CategoryCard = ({ category, idx }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative h-[400px] overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <img
          src={category.img}
          alt={category.label}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <h3 className="text-3xl font-bold text-white mb-4">{category.label}</h3>
        <Link 
          to={category.path}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-primary hover:text-white"
        >
          Explore all packages
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;

import { useNavbarContext } from "./Hook";

var menu = [
  { index: 0, title: "About Me" },
  { index: 1, title: "Home" },
  { index: 2, title: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16">
          <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {menu.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function ListItem({ item }) {
  const { setIndex } = useNavbarContext();

  const handleClick = () => {
    setIndex(item.index);
  };
  return (
    <li onClick={handleClick}>
      <a
        className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-200 sm:text-base sm:px-4"
        href="#"
      >
        {item.title}
      </a>
    </li>
  );
}

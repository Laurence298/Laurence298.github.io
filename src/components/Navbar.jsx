import { useNavbarContext } from "../contexts/NavbarContext";

var menu = [
  { index: 0, title: "Home", link: "#" },
  { index: 2, title: "Resume", link: "/" },
];

export default function Navbar() {
  return (
    <nav className="bg-[#1B3C53] sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center gap-1">
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
  const { setIndex, SetClicked } = useNavbarContext();

  const handleClick = () => {
    SetClicked(true);
    setIndex(item.index);

    if (item.title === "Resume") {
      const pdfWindow = window.open("/Resume.pdf", "_blank");
      if (pdfWindow) {
        pdfWindow.addEventListener("load", () => {
          pdfWindow.focus();
        });
      }
    }
  };

  return (
    <li onClick={handleClick}>
      <a
        className="block px-6 py-2 text-sm font-medium text-white hover:bg-[#234C6A] rounded-md transition-colors duration-200"
        href={item.link}
      >
        {item.title}
      </a>
    </li>
  );
}

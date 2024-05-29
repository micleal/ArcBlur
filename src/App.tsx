import { Header } from "@/components/header";
import { ScrollArea } from "./components/ui/scroll-area";

function App() {
  return (
    <div className="min-h-screen min-w-80">
      <Header />
      <ScrollArea className="h-[512px]">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Hello, world!</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            varius, nisl eget aliquet aliquet, ex urna tincidunt justo, nec
            tincidunt mi sapien vel libero. Donec nec purus in lectus
            pellentesque luctus. Proin euismod, nunc eget lacinia ultricies, mi
            nisl bibendum nunc, ac ultricies purus libero nec sapien. Sed
            fermentum, odio a ultricies consequat, eros sapien tincidunt metus,
            nec luctus nunc nunc vel nunc. Nullam nec semper mi. Nulla facilisi.
            Nullam nec tincidunt purus. Sed nec libero sed urna aliquam
            fermentum. Nullam nec erat et libero ultricies aliquam. Nullam
            tincidunt, dui nec fermentum auctor, nisl metus ullamcorper dui, nec
            fermentum libero nunc nec elit. Nullam nec nisl nec ligula
            ullamcorper euismod
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}

export default App;

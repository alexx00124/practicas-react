import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import { ArtworkCard } from './components/ArtworkCard';
import { SearchChip } from './components/SearchChip';
import { TagCard } from './components/TagCard';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <div className="px-10 py-10">
        <CharacterCard />
      </div>

      {/* Artwork cards */}
      <div className="flex gap-4 px-10">
        <ArtworkCard image="./src/assets/layla.png" author="@SukoCchi" />
        <ArtworkCard image="./src/assets/layla.png" author="@RenChain" />
      </div>

      {/* Search chips */}
      <div className="flex gap-2 px-10">
        <SearchChip text="Layla ascension material" active={true} />
        <SearchChip text="Layla build" />
      </div>

      {/* Tag cards */}
      <div className="flex flex-col gap-4 px-10 py-10">
        <TagCard
          icon={reactLogo}
          title="Cryo character"
          description="Cryo is one of the seven..."
        />
        <TagCard
          icon={reactLogo}
          title="Sumeru"
          description="Sumeru is one of the seven regions..."
        />
      </div>
    </>
  );
}

export default App;

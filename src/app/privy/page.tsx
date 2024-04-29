import ConnectButton from "~/components/privy/connect-button";
import MintMagicToken from "~/components/quests/mint-token";

export default function Home() {
  return (
    <>
      <header className="max-w-screen-xl mx-auto px-6 py-6 flex items-center">
        <div>
          <h1 className="text-xl font-semibold">Quests Portal</h1>
          <span className="sr-only">Quests</span>
        </div>
        <ConnectButton className="ml-auto" />
      </header>

      <main className="max-w-screen-xl mx-auto px-6 py-12">
        <section>
          <h2 className="mb-4 font-medium text-lg">Treasure Portal Quests</h2>

          <div className="grid grid-cols-3 gap-6">
            <MintMagicToken />
          </div>
        </section>
      </main>
    </>
  );
}

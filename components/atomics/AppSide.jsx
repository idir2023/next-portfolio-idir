import USER from '../../data/user.json';

const AppSide = () => (
  <div className="hidden md:flex justify-between fixed bottom-0 left-0 right-0 z-10 w-full px-8 2xl:px-16 max-w-[1905px] mx-auto pointer-events-none">
    <aside className="flex flex-col items-center pointer-events-auto">
      <ul className="flex flex-col items-center space-y-5">
        {USER.contact.contents
          .filter((filteredItem) => filteredItem.category === 'Social Media')
          .map((item) => (
            <li key={item.id} className="w-max">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                aria-label={item.name}
                className="group flex items-center justify-center w-10 h-10 rounded-xl bg-surface/30 border border-white/5 text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <i className={`${item.icon} text-lg transition-transform duration-300 group-hover:-translate-y-0.5`} />
              </a>
            </li>
          ))}
      </ul>
      <div className="h-24 w-[1px] bg-gradient-to-b from-primary to-transparent mt-5" />
    </aside>
    <aside className="flex flex-col justify-end items-center pointer-events-auto">
      {[USER.contact.contents.find((item) => item.category === 'Email')].map(
        (item) =>
          item && (
            <a
              key={item.id}
              href={`mailto:${item.username}`}
              className="text-muted text-xs transition duration-300 hover:text-primary tracking-widest hover:-translate-y-1"
              style={{ writingMode: 'tb-rl', letterSpacing: '0.15em' }}
            >
              {item.username}
            </a>
          )
      )}
      <div className="h-24 w-[1px] bg-gradient-to-b from-transparent to-primary mt-5" />
    </aside>
  </div>
);

export default AppSide;

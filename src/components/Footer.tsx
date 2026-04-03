const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 font-bold text-sm">
          <span className="text-primary">Action</span>
          <span className="text-foreground">Inbox</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Action Inbox. The Sovereign Action Engine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
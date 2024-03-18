const HomePage = () => {
  return (
    <div className="text-white px-10">
      <h1 className="text-5xl font-semibold">
        Get started with Bootstrap in React Js
      </h1>
      <p className="pt-3 text-2xl w-[800px] font-light leading-10">
        Bootstrap is a powerful, feature-packed frontend toolkit. Build
        anything—from prototype to production—in minutes.
      </p>
      <h4 className="font-semibold text-3xl mt-10 text-purple-500">Quick start </h4>
      <p className="mt-1 text-gray-300">
      Get started by including Bootstrap’s production-ready CSS and JavaScript via Components in react without the need for any build steps. See it in practice with this Bootstrap Menu.
      </p>
      <h4 className="font-semibold text-3xl mt-10 text-purple-500">JS components</h4>
      <p className="text-gray-300 mt-1">
        Curious which components explicitly require our JavaScript and Popper?
        If you’re at all unsure about the general page structure, keep reading
        for an example page template.
      </p>
      <ul className="list-disc px-6 mt-3 space-y-2 text-[17px]">
        <li>Alerts for dismissing</li>
        <li>Buttons for toggling states and checkbox/radio functionality</li>
        <li>Carousel for all slide behaviors, controls, and indicators</li>
        <li>Collapse for toggling visibility of content</li>
        <li>Dropdowns for displaying and positioning</li>
        <li>Modals for displaying, positioning, and scroll behavior</li>
        <li>
          Navbar for extending our Collapse and Offcanvas plugins to implement
          responsive behaviors
        </li>
        <li>Navs with the Tab plugin for toggling content panes</li>
        <li>Offcanvases for displaying, positioning, and scroll behavior</li>
        <li>Scrollspy for scroll behavior and navigation updates</li>
        <li>Toasts for displaying and dismissing</li>
        <li>
          Tooltips and popovers for displaying and positioning
        </li>
      </ul>
    </div>
  );
};

export default HomePage;


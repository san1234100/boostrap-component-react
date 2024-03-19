import Alert from "../components/Alert";
import AlertCode from "../components/AlertCode";
const AlertPage = () => {
  return (
    <div className="text-white px-10">
      <h4 className="text-5xl font-semibold">Alerts</h4>
      <p className="font-light text-2xl pt-2">
        Provide contextual feedback messages for typical user actions with the
        handful of available and flexible alert messages.
      </p>
      <h4 className="mt-10 text-4xl font-semibold text-purple-500">Variants</h4>
      <p className="text-gray-300 pt-2 text-lg">
        Alerts are available for any length of text, as well as an optional
        close button. For proper styling, use one of the eight required
        components.
      </p>
      <div className="border border-gray-500 rounded pt-5 mt-5 max-w-4xl ">
        {/* alerts */}
        <div className="space-y-5 px-20 pb-5">
          <Alert text="A simple primary alert—check it out!" color="primary" />
          <Alert
            text="A simple secondary alert—check it out!"
            color="secondary"
          />
          <Alert text="A simple success alert—check it out!" color="success" />
          <Alert text="A simple danger alert—check it out!" color="danger" />
          <Alert text="A simple warning alert—check it out!" color="warning" />

          <Alert text="A simple light alert—check it out!" color="light" />
          <Alert text="A simple dark alert—check it out!" color="dark" />
        </div>
        <div className="bg-gray-500 h-[1px]"></div>
        <p className="p-2 text-gray-400 font-semibold">HTML</p>
        <div className="bg-gray-500 h-[1px]"></div>
        <div className="bg-black p-5 bg-opacity-35">
          <pre>
            <code>
              <AlertCode
                text="A simple primary alert—check it out!"
                color="primary"
              />
              <AlertCode
                text="A simple secondary alert—check it out!"
                color="secondary"
              />
              <AlertCode
                text="A simple success alert—check it out!"
                color="success"
              />
              <AlertCode
                text="A simple danger alert—check it out!"
                color="danger"
              />
              <AlertCode
                text="A simple warning alert—check it out!"
                color="warning"
              />

              <AlertCode
                text="A simple light alert—check it out!"
                color="light"
              />
              <AlertCode
                text="A simple dark alert—check it out!"
                color="dark"
              />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AlertPage;

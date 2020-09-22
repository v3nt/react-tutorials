import React from "react";

import Modal from "../Modal";

const StreamDelete = () => {
  // this root div causes style issues (always jsz needs a root div). Fragemnt ( <> abc </> helps here
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button ">cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <h2>StreamDelete</h2>
      <Modal
        title="Delete Stream "
        content="Are you sure sure ???"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;

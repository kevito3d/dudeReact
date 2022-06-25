import { useEffect, useState } from "react";

export default function Modal(props) {
  const { show, onHide, title, id, body, footer } = props;
  const [modalShow, setModalShow] = useState(show);
  const [modalData, setModalData] = useState({
    title: title,
    id: id,
    body: body,
    footer: footer,
  });
  /** useefect to show */
    useEffect(() => {
        console.log("abriendo: "+ show);
        setModalShow(show);
    }, [show]);

  return (
    <>
      {/* renderizado conditional */}
      {modalShow ? (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {modalData.title}
                </h5>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => onHide()}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{modalData.body}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

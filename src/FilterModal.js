import React from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import "./filterModal.css";
/* FilterModal.js */
const FilterModal = React.forwardRef(({ children, onApply, onDismiss }, ref) => {
    return (
        <dialogoverlay className="filter-modal">
            <div className="filter-modal__wrapper" aria-label="modal window">
                <div className="filter-modal__header"></div>
                <button onClick={onDismiss}>x</button>
                <div className="filter-modal__content">{children}</div>
                <div className="filter-modal__actions">
                    <button onClick={onApply}>Apply</button>
                </div>
            </div>
        </dialogoverlay>
    );
});
export default FilterModal;

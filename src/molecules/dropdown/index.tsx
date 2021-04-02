import { useOutsideClick } from "@/ions/hooks/outside-click";
import { StyledDropdown, StyledDropdownContent } from "@/molecules/dropdown/styled";
import { DropdownProps } from "@/types";
import React from "react";
import { usePopper } from "react-popper";

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
	({ button: Button, children, ...props }, ref) => {
		const [isOpen, setIsOpen] = React.useState(false);
		const [referenceElement, setReferenceElement] = React.useState<HTMLElement>(null);
		const [popperElement, setPopperElement] = React.useState<HTMLElement>(null);
		const { styles, attributes } = usePopper(referenceElement, popperElement);
		const handleOutsideClick = React.useCallback(() => {
			setIsOpen(false);
		}, []);
		const elements = React.useMemo(() => [popperElement, referenceElement], [
			popperElement,
			referenceElement,
		]);
		useOutsideClick(handleOutsideClick, elements);

		return (
			<>
				<Button
					ref={setReferenceElement}
					active={isOpen}
					onClick={() => {
						setIsOpen(previousState => !previousState);
					}}
				/>

				{isOpen && (
					<StyledDropdown
						ref={setPopperElement}
						style={styles.popper}
						{...attributes.popper}
					>
						<StyledDropdownContent {...props} ref={ref}>
							{children}
						</StyledDropdownContent>
					</StyledDropdown>
				)}
			</>
		);
	}
);

Dropdown.defaultProps = {
	button: React.forwardRef<HTMLButtonElement>(({ children, ...props }, ref) => (
		<button {...props} ref={ref} type="button">
			X
		</button>
	)),
};

export default Dropdown;

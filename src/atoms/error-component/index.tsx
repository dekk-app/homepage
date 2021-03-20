import { ErrorComponentProps } from "@/types";
import React from "react";

/**
 * The ErrorComponent can be used to log errors on screen instead of allowing Next.js to handle the
 * error.
 *
 * @param {string} message
 * @returns {JSX.Element}
 * @constructor
 */
const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => <div>{message}</div>;

export default ErrorComponent;

/**
 * Created by Lijun on 2018/1/17.
 */
import React, {Component} from "react"
import {Document,Page} from "react-pdf/build/entry.webpack"
class PDFView extends Component{
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document file="http://localhost:3000/demo.pdf"
                    onLoadSuccess={this.onDocumentLoad}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}

export  default  PDFView
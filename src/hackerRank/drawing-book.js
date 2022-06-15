/* 
Function Description

Complete the pageCount function in the editor below.

pageCount has the following parameter(s):
    int n: the number of pages in the book
    int p: the page number to turn to

Returns
    int: the minimum number of pages to turn

Input Format
The first line contains an integer, the number of pages in the book.
The second line contains an integer, , the page to turn to. 
*/

export function pageCount(totalPages, pageNumberToGo) {
    //checks if distance from the page number is smaller
    //from the fron or the back
    if (pageNumberToGo === 1 || pageNumberToGo === totalPages) {
        return 0;
    }
    if (pageNumberToGo % 2 === 0 && pageNumberToGo === totalPages - 1) {
        return 0;
    }
    if (pageNumberToGo % 2 !== 0 && pageNumberToGo === totalPages - 1) {
        return 1;
    }

    if (pageNumberToGo < totalPages / 2) {
        return Math.floor(pageNumberToGo / 2);
    }
    if (pageNumberToGo > totalPages / 2) {
        return Math.floor((totalPages - pageNumberToGo) / 2);
    }
}

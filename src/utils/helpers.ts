import Resume from "@/assets/Jeremiah Longmatey.pdf";

export function downloadFile(filename: string) {
    const blob = new Blob([Resume], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    console.log(url);
    const a = document.createElement("a");
  
    a.href = url;
    a.download = filename;
    a.style.display = "none";
  
    document.body.appendChild(a);
    a.click();
  
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  export function downloadFromUrl(fileUrl: string, filename: string) {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = filename;
    a.style.display = "none";
  
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
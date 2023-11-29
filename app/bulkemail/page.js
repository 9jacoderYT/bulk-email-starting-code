import TabOne from "@/components/bulkEmailsPage/tabOne";
import Template from "@/components/template";
import React from "react";

export default function BulkEmailPage() {
  return (
    <div>
      <Template />
      <br />
      <div className="border border-1 shadow-lg p-5 rounded-lg">

      <TabOne />
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Download, Eye } from 'lucide-react';
import moment from "moment";
import { StatusBadge } from "./status-badge";

export function TransactionRecord({
  status,
  holdStatus,
  paymentType,
  refAgency,
  passport,
  amount,
  submissionDate,
  paymentDate,
  onView,
  onDownload,
  onSendMail
}) {
  // eslint-disable-next-line no-unused-vars
  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      signDisplay: 'always',
    }).format(amount);
  }

  return (
    (<div className="p-4 border-t">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="p-4 bg-slate-100 size-16 flex items-center justify-center rounded-full">
            <DollarSign />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-medium">{status}</span>
              {holdStatus && (
                <StatusBadge className="text-xs" status={holdStatus} />
              )}
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Payment Type: {paymentType}</p>
              <p>Ref/ Agency: {refAgency}</p>
              <p>Passport: {passport}</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">{formatCurrency(amount)}</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-muted-foreground">
              Submission Date: {moment(submissionDate).format('d-MMM-YYYY | h:mm A')}
            </p>
            <p className="text-sm text-muted-foreground">
              Payment Date: {moment(paymentDate).format('d-MMM-YYYY | h:mm A')}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-muted-foreground"
              onClick={onDownload}>
              <Download /> PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-muted-foreground"
              onClick={onView}>
              <Eye />View
            </Button>
            <Button variant="outline" size="sm" className="text-primary" onClick={onSendMail}>
              Send Mail <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

    </div>)
  );
}


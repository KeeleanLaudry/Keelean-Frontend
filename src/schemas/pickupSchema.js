import { z } from "zod";

export const pickupSchema = z.object({
  customerName: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid mobile number"),
  address: z.string().min(10, "Address required"),

  pickupDate: z.string().min(1, "Select pickup date"),
  pickupTime: z.string().min(1, "Select time slot"),

  serviceType: z.string().min(1, "Select service"),
  estimatedWeight: z
    .number({ invalid_type_error: "Enter weight" })
    .min(1, "Minimum 1kg"),
});
export const rescheduleSchema = z.object({
  newDate: z.string().min(1, "Select new date"),
  newTime: z.string().min(1, "Select new time slot"),
  reason: z.string().min(10, "Provide reason (min 10 characters)"),
});
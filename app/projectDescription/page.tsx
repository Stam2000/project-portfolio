"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Import Textarea component
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import * as z from 'zod';
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define the form schema using Zod
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50)
    .nonempty({ message: 'Name is required' }),
  age: z
    .number({
      required_error: 'Age is required',
    })
    .min(18, { message: 'Age must be at least 18' })
    .max(100, { message: 'Age must be at most 100' }),
  occupation: z
    .string()
    .min(2, { message: 'Occupation must be at least 2 characters' })
    .max(50)
    .nonempty({ message: 'Occupation is required' }),
  familyStatus: z.enum(['single', 'married', 'married_with_children'], {
    required_error: 'Family Status is required',
  }),
  incomeLevel: z.number().min(0).optional(),
  locationType: z.enum(['urban', 'suburban', 'rural']).optional(),
  spendingBehavior: z.enum(['frugal', 'balanced', 'spendthrift']).optional(),
  additionalInfo: z.string().optional(), // Added field to schema
  monthlyRent: z.number().min(0).optional(),
  monthlySavings: z.number().min(0).optional(),
  riskTolerance: z.enum(['conservative', 'moderate', 'aggressive']).optional(),
  creditCards: z.enum(['rarely', 'moderate', 'frequent']).optional(),
  workSchedule: z.enum(['regular', 'shift', 'flexible']).optional(),
  transportation: z.enum(['car', 'public', 'mixed']).optional(),
  diningPreference: z.enum(['homeCook', 'mixed', 'eatOut']).optional(),
  shoppingHabits: z.enum(['planner', 'mixed', 'impulsive']).optional(),
});

const PersonaForm = () => {
  // Initialize useForm with initial defaultValues
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: undefined,
      occupation: '',
      familyStatus: 'single',
      incomeLevel: undefined,
      locationType: 'urban',
      spendingBehavior: 'balanced',
      additionalInfo: '', // Added default value
      monthlyRent: undefined,
      monthlySavings: undefined,
      riskTolerance: 'moderate',
      creditCards: 'moderate',
      workSchedule: 'regular',
      transportation: 'car',
      diningPreference: 'homeCook',
      shoppingHabits: 'planner',
    },
  });

  // State to handle loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle AI generation and updating form values
  const handleGenerateWithAi = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get('http://localhost:3000/api/formular');
      
      // Assuming data.response contains the form data in the correct structure
      form.reset(data.response);
      console.log('Form data updated with AI response:', data.response);
    } catch (err) {
      console.error('Error fetching AI data:', err);
      
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (data) => {
    console.log('Form data submitted:', data);

    // Handle form submission logic here (e.g., send to API)
    try {
        const res = await axios.post('/api/formular',{
            data
        });
        
        console.log(res)
        // Assuming data.response contaform.reset(data.response);
        
      } catch (err) {
        console.error('Error fetching AI data:', err);
        
      } finally {
        setLoading(false);
      }
  };

  return (
    <Card className="w-full max-w-2xl my-8 mx-auto">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Financial Persona Creator</CardTitle>
        <Button onClick={handleGenerateWithAi} disabled={loading}>
          {loading ? 'Generating...' : 'Generate with AI'}
        </Button>
      </CardHeader>
      {error && (
        <div className="text-red-500 text-sm mb-4">
          {error}
        </div>
      )}
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Name (Required) */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>
                      Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Age (Required) */}
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>
                      Age <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Age"
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value === '' ? undefined : Number(value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Occupation (Required) */}
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>
                      Occupation <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter occupation" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Family Status (Required) */}
              <FormField
                control={form.control}
                name="familyStatus"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>
                      Family Status <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="married_with_children">
                            Married with Children
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Annual Income (Optional) */}
              <FormField
                control={form.control}
                name="incomeLevel"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Annual Income</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Annual income"
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value === '' ? undefined : Number(value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Location Type (Optional) */}
              <FormField
                control={form.control}
                name="locationType"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Location Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urban">Urban</SelectItem>
                          <SelectItem value="suburban">Suburban</SelectItem>
                          <SelectItem value="rural">Rural</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Spending Behavior (Optional) */}
              <FormField
                control={form.control}
                name="spendingBehavior"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spending Behavior</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select spending behavior" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="frugal">Frugal</SelectItem>
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="spendthrift">
                            Spendthrift
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Textarea for Random Information */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter any additional information here"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Accordion for Additional Fields */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="financial">
                <AccordionTrigger>More</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Monthly Rent (Optional) */}
                    <FormField
                      control={form.control}
                      name="monthlyRent"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Monthly Rent/Mortgage</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              placeholder="Amount"
                              onChange={(e) => {
                                const value = e.target.value;
                                field.onChange(value === '' ? undefined : Number(value));
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Monthly Savings (Optional) */}
                    <FormField
                      control={form.control}
                      name="monthlySavings"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Monthly Savings Target</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              placeholder="Amount"
                              onChange={(e) => {
                                const value = e.target.value;
                                field.onChange(value === '' ? undefined : Number(value));
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Risk Tolerance (Optional) */}
                    <FormField
                      control={form.control}
                      name="riskTolerance"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Risk Tolerance</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select risk level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="conservative">
                                  Conservative
                                </SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="aggressive">
                                  Aggressive
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Credit Card Usage (Optional) */}
                    <FormField
                      control={form.control}
                      name="creditCards"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Credit Card Usage</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select usage pattern" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="rarely">Rarely</SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="frequent">Frequent</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Work Schedule (Optional) */}
                    <FormField
                      control={form.control}
                      name="workSchedule"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Work Schedule</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select schedule" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="regular">Regular (9-5)</SelectItem>
                                <SelectItem value="shift">Shift Work</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Primary Transportation (Optional) */}
                    <FormField
                      control={form.control}
                      name="transportation"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Primary Transportation</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select mode" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="car">Personal Car</SelectItem>
                                <SelectItem value="public">
                                  Public Transit
                                </SelectItem>
                                <SelectItem value="mixed">Mixed</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Dining Preference (Optional) */}
                    <FormField
                      control={form.control}
                      name="diningPreference"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Dining Preference</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select preference" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="homeCook">Home Cook</SelectItem>
                                <SelectItem value="mixed">Mixed</SelectItem>
                                <SelectItem value="eatOut">Eat Out</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Shopping Habits (Optional) */}
                    <FormField
                      control={form.control}
                      name="shoppingHabits"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Shopping Habits</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select habits" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="planner">
                                  Planned Purchases
                                </SelectItem>
                                <SelectItem value="mixed">Mixed</SelectItem>
                                <SelectItem value="impulsive">
                                  Impulsive Buyer
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <div className="flex justify-end">
              <Button onClick={handleSubmit} type="submit">Generate Data</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PersonaForm;

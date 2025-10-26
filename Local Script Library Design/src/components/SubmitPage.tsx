import { useState } from "react";
import { Upload, Info, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { categories, countries } from "../data/mockData";

interface SubmitPageProps {
  onNavigate: (page: string) => void;
}

export function SubmitPage({ onNavigate }: SubmitPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    longDescription: "",
    category: "",
    country: "",
    targetWebsites: "",
    code: "",
    agreedToTerms: false,
    agreedToCodeOfConduct: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setTimeout(() => {
      onNavigate("browse");
    }, 3000);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.name &&
    formData.description &&
    formData.category &&
    formData.code &&
    formData.agreedToTerms &&
    formData.agreedToCodeOfConduct;

  if (submitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="pt-12 pb-12">
            <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h2 className="mb-4">Script Submitted Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for contributing to the Local Script Library. Your script is now under review
              by our community moderators.
            </p>
            <p className="text-sm text-muted-foreground">
              Redirecting to browse page...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Submit a Script</h1>
          <p className="text-muted-foreground">
            Share your userscript with the community and help others enhance their browsing experience
          </p>
        </div>

        {/* Info Alert */}
        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            All scripts are reviewed by community moderators before being published. Please ensure your
            code follows our guidelines and doesn't contain malicious content.
          </AlertDescription>
        </Alert>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Provide the essential details about your script
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Script Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Jumia Auto-Fill Checkout"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Short Description *</Label>
                <Input
                  id="description"
                  placeholder="A brief one-line description of what your script does"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longDescription">Detailed Description</Label>
                <Textarea
                  id="longDescription"
                  placeholder="Provide a comprehensive description of your script's features and benefits"
                  value={formData.longDescription}
                  onChange={(e) => handleChange("longDescription", e.target.value)}
                  rows={4}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleChange("category", value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter((cat) => cat !== "All").map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => handleChange("country", value)}
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.name}>
                          {country.flag} {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetWebsites">Target Websites</Label>
                <Input
                  id="targetWebsites"
                  placeholder="e.g., jumia.com.ng, konga.com (comma separated)"
                  value={formData.targetWebsites}
                  onChange={(e) => handleChange("targetWebsites", e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  List the websites where this script will work, separated by commas
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code */}
          <Card>
            <CardHeader>
              <CardTitle>Script Code *</CardTitle>
              <CardDescription>
                Paste your complete userscript code including metadata block
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={`// ==UserScript==
// @name         My Awesome Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Description of what it does
// @author       Your Name
// @match        https://example.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here
})();`}
                value={formData.code}
                onChange={(e) => handleChange("code", e.target.value)}
                rows={12}
                className="font-mono text-sm"
                required
              />
              <p className="text-sm text-muted-foreground mt-2">
                Make sure to include proper metadata headers (@name, @version, @match, etc.)
              </p>
            </CardContent>
          </Card>

          {/* Screenshots (Optional) */}
          <Card>
            <CardHeader>
              <CardTitle>Screenshots (Optional)</CardTitle>
              <CardDescription>
                Upload screenshots or GIFs showing your script in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                <p className="text-sm text-muted-foreground">PNG, JPG or GIF up to 5MB</p>
                <Button type="button" variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Terms & Guidelines</CardTitle>
              <CardDescription>
                Please review and accept our terms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="codeOfConduct"
                  checked={formData.agreedToCodeOfConduct}
                  onCheckedChange={(checked) =>
                    handleChange("agreedToCodeOfConduct", checked as boolean)
                  }
                />
                <div className="space-y-1">
                  <Label htmlFor="codeOfConduct" className="cursor-pointer">
                    I agree to the Code of Conduct *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I will not submit malicious, harmful, or deceptive code that could harm users or
                    violate their privacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="license"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) =>
                    handleChange("agreedToTerms", checked as boolean)
                  }
                />
                <div className="space-y-1">
                  <Label htmlFor="license" className="cursor-pointer">
                    I agree to the License Agreement *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I understand my script will be open source under the MIT license and publicly
                    available for review and use.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onNavigate("browse")}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Submit Script for Review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

import Button from "./PixelBlock/Button";

// Main component that displays all the examples
const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-12 max-w-4xl mx-auto">
      {/* Colors - Solid Variant */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Colors (Solid Variant)</h2>
        <div className="flex flex-wrap gap-4">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <Button color="neutral">Neutral</Button>
        </div>
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="shadow">Shadow</Button>
          <Button variant="text">Text</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </section>

      {/* Radius */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Border Radius</h2>
        <div className="flex flex-wrap gap-4">
          <Button radius="none">No Radius</Button>
          <Button radius="sm">Small Radius</Button>
          <Button radius="md">Medium Radius</Button>
          <Button radius="lg">Large Radius</Button>
          <Button radius="full">Full Radius</Button>
        </div>
      </section>

      {/* Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                <path d="M0 14s1-3 4-3 4 3 4 3H0z" />
                <path
                  fillRule="evenodd"
                  d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM8 14s-4 0-4-3c0-1.5 2-3 4-3s4 1.5 4 3c0 3-4 3-4 3z"
                />
              </svg>
            }
          >
            User Profile
          </Button>
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.9.1a1 1 0 0 0-1.1-.1L1.4 7.2a1 1 0 0 0-.1 1.7l4.5 2.5-1.5 4.5a1 1 0 0 0 1.3 1.3l4.5-1.5 2.5 4.5a1 1 0 0 0 1.7-.1L16 1.1a1 1 0 0 0-.1-1.1zM14.5 1.5L1.5 8.5l3.5 2-1.5 4.5 4.5-1.5 2 3.5 1.5-1.5-3.5-2 2-4.5 4.5-3.5z" />
              </svg>
            }
            iconPosition="right"
          >
            Send Message
          </Button>
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.3 4.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L12.6 8H1a1 1 0 0 1 0-2h11.6L10.3 4.3z"
                />
              </svg>
            }
            variant="outline"
          >
            Next Step
          </Button>
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-save"
                viewBox="0 0 16 16"
              >
                <path d="M7.5 0a.5.5 0 0 1 .5.5V1h1V.5a.5.5 0 0 1 1 0V1h1V.5a.5.5 0 0 1 1 0V1h1v1h-1v1h-1V2h-1v1h-1V2h-1V1h-1V.5a.5.5 0 0 1 .5-.5z" />
                <path d="M4 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM3 2v12h10V2H3z" />
              </svg>
            }
            color="success"
          >
            Save
          </Button>
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 15a.5.5 0 0 1 .5.5h14a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5v-1z" />
                <path
                  fillRule="evenodd"
                  d="M8 0a.5.5 0 0 1 .5.5v10.793l2.146-2.147a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.707L7.5 11.293V.5A.5.5 0 0 1 8 0z"
                />
              </svg>
            }
            variant="ghost"
          >
            Download
          </Button>
        </div>
      </section>

      {/* Icon Only Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Icon Only</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-1.5 1.5-3-3 1.5-1.5z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5V15h1.5l8.5-8.5-1.5-1.5L1 13.5z"
                />
              </svg>
            }
            aria-label="Edit"
          />
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h1V.5a.5.5 0 0 1 .5-.5zM4 2h8v1H4V2z" />
                <path d="M1 4h14v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4z" />
              </svg>
            }
            color="error"
            aria-label="Delete"
          />
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L5.5 9.793l8-8a.5.5 0 0 1 .354-.146z"
                />
              </svg>
            }
            color="success"
            variant="outline"
            aria-label="Approve"
          />
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 1 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            }
            color="warning"
            variant="ghost"
            aria-label="Cancel"
          />
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-upload"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M.5 8a.5.5 0 0 1 .5.5v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a.5.5 0 0 1 1 0v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 0a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .707.707l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.707L7.5 6.293V.5A.5.5 0 0 1 8 0z"
                />
              </svg>
            }
            color="info"
            variant="link"
            aria-label="Upload"
          />
        </div>
      </section>

      {/* Loading State */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Loading State</h2>
        <div className="flex flex-wrap gap-4">
          <Button isLoading>Loading</Button>
          <Button isLoading loadingText="Saving..." color="success">
            Save
          </Button>
          <Button
            isLoading
            loadingText="Submitting..."
            variant="outline"
            color="info"
          >
            Submit
          </Button>
          <Button isLoading variant="ghost" color="warning">
            Processing
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Full Width</h2>
        <div className="space-y-4">
          <Button fullWidth>Full Width Button</Button>
          <Button
            fullWidth
            color="success"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L5.5 9.793l8-8a.5.5 0 0 1 .354-.146z"
                />
              </svg>
            }
          >
            Confirm
          </Button>
          <Button
            fullWidth
            variant="outline"
            color="error"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 1 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            }
          >
            Cancel
          </Button>
        </div>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button disabled variant="outline">
            Disabled Outline
          </Button>
          <Button disabled color="success">
            Disabled Success
          </Button>
          <Button disabled variant="ghost" color="error">
            Disabled Ghost
          </Button>
        </div>
      </section>

      {/* Color and Variant Combinations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">
          Color and Variant Combinations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="space-y-2">
            <Button color={"primary"} variant="solid" className="w-full">
              Solid
            </Button>
            <Button color={"secondary"} variant="outline" className="w-full">
              Outline
            </Button>
            <Button color={"info"} variant="ghost" className="w-full">
              Ghost
            </Button>
            <Button color={"success"} variant="link" className="w-full">
              Link
            </Button>
            <Button color={"warning"} variant="shadow" className="w-full">
              Shadow
            </Button>
            <Button color={"error"} variant="text" className="w-full">
              Text
            </Button>
          </div>
        </div>
      </section>

      {/* Complete Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Real-world Examples</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Form Actions</h3>
            <div className="flex gap-2 justify-end">
              <Button variant="ghost" color="neutral">
                Cancel
              </Button>
              <Button
                color="primary"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-save"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.5 0a.5.5 0 0 1 .5.5V1h1V.5a.5.5 0 0 1 1 0V1h1V.5a.5.5 0 0 1 1 0V1h1v1h-1v1h-1V2h-1v1h-1V2h-1V1h-1V.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M4 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM3 2v12h10V2H3z" />
                  </svg>
                }
              >
                Save Changes
              </Button>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Modal Actions</h3>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                color="error"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 1 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                }
              >
                Decline
              </Button>
              <Button
                color="success"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L5.5 9.793l8-8a.5.5 0 0 1 .354-.146z"
                    />
                  </svg>
                }
              >
                Accept
              </Button>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Wizard Steps</h3>
            <div className="flex justify-between">
              <Button
                variant="outline"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.3 4.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L12.6 8H1a1 1 0 0 1 0-2h11.6L10.3 4.3z"
                    />
                  </svg>
                }
                iconPosition="left"
              >
                Previous
              </Button>
              <Button
                color="primary"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.7 4.3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L8.6 8H15a1 1 0 0 1 0 2H8.6l-2.3 2.3a1 1 0 0 1-1.4-1.4l3-3a1 1 0 0 1 0-1.4l-3-3a1 1 0 0 1 0-1.4z"
                    />
                  </svg>
                }
                iconPosition="right"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;
